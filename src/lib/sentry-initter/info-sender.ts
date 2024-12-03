import * as Sentry from '@sentry/react';

export const sendInfoToSentry = (data:any, error:Error) => {
    Sentry.configureScope((scope) => {
        scope.setExtra('data', {data});
    });

    Sentry.captureException(error);
};