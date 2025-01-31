const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
// const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const ip = require('ip').address();

const c = {
    v: process.env.npm_package_version,
    fast: process.env.FAST === 'true',
    analyzeBundles: false,
    benchmark: false
};

/**
 * @link https://link.medium.com/X9iilMtH2X
 * @return {webpack.DefinePlugin}
 */
const createEnvPlugin = env => {
    const envKeys = (() => {
        if (!env)
            return {};

        return Object.keys(env).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(env[next]);

            return prev;
        }, {});
    })();

    return new webpack.DefinePlugin(envKeys);
};

/**
 *
 * @param {boolean} isProd
 * @returns {[]}
 */
const createPlugins = (isProd) => {
    const def = [
        // new ESLintPlugin({
        //     context: path.resolve(__dirname, '../'),
        //     extensions: ['js', 'jsx', 'ts', 'tsx'],
        //     failOnError: false,
        //     failOnWarning: false,
        // }),
        createEnvPlugin(process.env),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets/',
                    to: 'assets/',
                    toType: 'dir'
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: null,
            template: path.resolve(__dirname, './src/template.html'),
            filename: isProd ? 'index.php' : 'index.html',
            base: isProd ? false : '/'
        }),
    ];

    if (!c.fast) {
        def.push(
            new ESLintPlugin({
                context: path.resolve(__dirname, '../'),
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                failOnError: false,
                failOnWarning: false,
            })
        )
    }

    if (!isProd)
        def.push(
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true
                    }
                }
            }),

            // new ReactRefreshPlugin(),
        );

    if (isProd)
        def.push(
            // new SentryWebpackPlugin({
            //     // sentry-cli configuration
            //     authToken: '597b5137bd924c7192ebf1afb6627c502157352fa91a40ff84c5023030e35450', // цей токен прив"язаний до користувача, не до проекту!
            //     org: "amakidsdev",
            //     project: "amaeng",
            //     release: process.env.npm_package_version,
            //
            //     // webpack specific configuration
            //     include: ".",
            //     ignore: ["node_modules", "webpack.config.js"],
            // }),

            new CopyPlugin({
                patterns: [
                    { from: "public" },
                    // to: 'locales/[path][name][ext]',
                    // {
                    //     from: 'public/locales/',
                    //     to: 'locales/[path][name].[contenthash][ext]',
                    // },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.min.css?v=' + c.v
                // filename: '[contenthash].min.css'
            }),
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['main.bundle.js.LICENSE'],
            }),
        );

    if (c.analyzeBundles)
        def.push(new BundleAnalyzerPlugin());

    return def;
};

/**
 *
 * @param {boolean} isProd
 * @returns {[]}
 */
const tsxLoaders = (isProd) => {
    const def = [];

    if (!isProd || c.fast) {
        def.push(
            {
                loader: 'thread-loader',
                options: {
                    // there should be 1 cpu for the fork-ts-checker-webpack-plugin
                    workers: require('os').cpus().length - 1,
                    workerParallelJobs: 50,
                    poolRespawn: false,
                    poolTimeout: Infinity // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
                },
            }
        );
    }

    def.push(
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: !isProd || c.fast,
                happyPackMode: !isProd || c.fast, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                ...((!isProd || c.fast) && {
                    getCustomTransformers: () => ({
                        before: [ReactRefreshTypeScript()],
                    })
                })
            }
        },
        // {loader: 'eslint-loader'}
    );

    return def;
};

/**
 * @param {boolean} isProd
 * @returns {string}
 */
const localIdentClassesName = (isProd) => !isProd ? '[path][name][local]' : '[local]_[hash:base64:10]';

/**
 * @param {boolean} isProd
 * @returns {[{loader: string}]|[*]}
 */
const getScssLoaders = (isProd) => {
    const def = !isProd
        ? [{loader: 'style-loader'}]
        : [MiniCssExtractPlugin.loader];

    def.push({
        loader: 'css-loader',
        options: {
            url: false,
            sourceMap: false,
            modules: {
                localIdentName: localIdentClassesName(isProd)
            }
        }
    });

    if (isProd) {
        def.push({loader: 'postcss-loader'});
    }

    def.push({
        loader: 'sass-loader'
    });

    return def;
};

/**
 * @param {boolean} isProd
 * @returns {[{loader: string}]|[*]}
 */
const getCssLoaders = (isProd) => {
    const def = !isProd
        ? [{loader: 'style-loader'}]
        : [MiniCssExtractPlugin.loader];

    def.push({
        loader: 'css-loader',
        options: {
            sourceMap: false,
        }
    });

    if (isProd) {
        def.push({loader: 'postcss-loader'});
    }

    return def;
};

module.exports = (env, options) => {
    const isProd = options.mode === 'production';

    // const publicPath = !isProd
    //     ? '/'
    //     : (process.env.insideMode === 'true' ? '/platform' : '') + '/apps/english/';

    return {
        optimization: {
            minimize: isProd,
            // minimizer: [
            //     new TerserPlugin({
            //         // sourceMap: true,
            //         terserOptions: {
            //             output: {
            //                 comments: false
            //             }
            //         },
            //         // extractComments: false
            //     })
            // ]
        },
        entry: [path.resolve(__dirname, './src/index.ts')],
        // entry: !isProd
        //     ? [path.resolve(__dirname, './src/index.ts')]
        //     : ['core-js/es', path.resolve(__dirname, './src/index.ts')],
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
            plugins: [
                new TsconfigPathsPlugin({
                    baseUrl: 'src',
                    configFile: 'tsconfig.json'
                })
            ],
            alias: {
                '_assets': path.resolve(__dirname, 'assets'),
                '_mixins': path.resolve(__dirname, 'src/scss/_mixins.scss')
            }
        },
        output: {
            // publicPath,
            path: path.resolve(__dirname, './dist'),
            // filename: '[name].[contenthash].bundle.js',
            filename: '[name].bundle.js?v=' + c.v,
            // sourceMapFilename: '[name].js.map?v=' + c.v,
            // chunkFilename: '[name].[contenthash].js'
            chunkFilename: '[name].js?v=' + c.v
        },
        module: {
            rules: [
                {
                    test: /\.(tsx|ts)?$/,
                    use: tsxLoaders(isProd),
                    exclude: /node_modules/
                },
                {
                    test: /\.(scss)$/,
                    use: getScssLoaders(isProd),
                    exclude: /node_modules/
                },
                {
                    test: /\.(css)$/,
                    use: getCssLoaders(isProd)
                    // exclude: /node_modules/,
                },
                {
                    test: /\.(svg|png|jpg|jpeg|woff|woff2|otf|ogg|aac|mp3|mp4|wav|ico)$/,
                    loader: 'file-loader',
                    options: {
                        // publicPath,
                        esModule: false,
                        toType: 'dir',
                        name: '[path][name].[ext]'
                    }
                },
                {
                    test: /\.m?js$/,
                    resolve: {
                        fullySpecified: false
                    },
                }
            ]
        },
        plugins: createPlugins(isProd),
        target: isProd ? 'browserslist' : 'web',
        devServer: {
            historyApiFallback: true,
            // contentBase: path.resolve(__dirname, './dist'),
            compress: isProd,
            // host: ip,
            https: true,
            hot: true,
            // open: true,
            port: 1236,
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            }
            // publicPath
        },
        stats: {
            assets: false
        }
    };
};
