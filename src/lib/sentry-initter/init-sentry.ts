import * as Sentry from '@sentry/react';
import {Integrations} from '@sentry/tracing';
import {globalConfig} from '@global-config/global';

(() => {
    if (!globalConfig.isProd) return;

    Sentry.init({
        dsn: 'https://e1a1689c4a6a4cc4919ec61a857f35fb@o304762.ingest.sentry.io/6085734',
        release: process.env.npm_package_version,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
    });
})();
