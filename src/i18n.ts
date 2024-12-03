import {globalConfig} from '@global-config/global';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-chained-backend';
import HttpApi from 'i18next-http-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import {pathConfig, projectName} from '@global-config/path-config';

const backendOptionsObj = {
    prefix: `i18next_res_${projectName}_`,
    defaultVersion: process.env.npm_package_version,
    // queryStringParams: {v: process.env.npm_package_version},
    loadPath: `${pathConfig.base}/locales/{{lng}}/{{ns}}.json`,
    // expirationTime: 7 * 24 * 60 * 60 * 1000,
    store: typeof window !== 'undefined' ? window.localStorage : null
};

export const loadLang = (langCode:string) => i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: langCode,
        // debug: true,
        // fallbackLng: 'ru',
        fallbackLng: false,
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        backend: {
            backends: globalConfig.isProd
                ? [LocalStorageBackend,/*primary*/ HttpApi/*fallback*/]
                : [HttpApi],             // fallback
            backendOptions: [backendOptionsObj, backendOptionsObj],
        }
    });

// import {globalConfig} from '@global-config/global';
// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import Backend from 'i18next-chained-backend';
// import HttpApi from 'i18next-http-backend';
// import LocalStorageBackend from 'i18next-localstorage-backend';
// import {pathConfig} from '@global-config/path-config';
//
// export const loadLang = (langCode:string) => i18n
//     .use(Backend)
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .init({
//         lng: langCode,
//         // fallbackLng: 'ru',
//         fallbackLng: false,
//         // debug: true,
//         // react: {useSuspense: false},
//         interpolation: {
//             escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//         },
//         // backend: {
//         //     loadPath: `${pathConfig.base}/locales/{{lng}}/{{ns}}.json`
//         // }
//         backend: {
//             backends:
//                 globalConfig.isProd
//                     ? [LocalStorageBackend,/*primary*/ HttpApi/*fallback*/]
//                     : [HttpApi],             // fallback
//
//             backendOptions: [{
//                 // versions: {ru: process.env.npm_package_version, uk: process.env.npm_package_version},
//                 prefix: 'i18next_res_',
//                 // queryStringParams: {v: '1334'},
//                 defaultVersion: process.env.npm_package_version,
//                 loadPath: `${pathConfig.base}/locales/{{lng}}/{{ns}}.json`,
//                 // expirationTime: 7 * 24 * 60 * 60 * 1000,
//                 store: typeof window !== 'undefined' ? window.localStorage : null
//
//             },
//                 //     {
//                 //     versions: {ru: 11, uk: 11},
//                 //     prefix: 'i18next_res_',
//                 //     loadPath: `${pathConfig.base}/locales/{{lng}}/{{ns}}.json?v=11`,
//                 //     store: typeof window !== 'undefined' ? window.localStorage : null
//                 // }
//             ]
//         }
//
//     });

