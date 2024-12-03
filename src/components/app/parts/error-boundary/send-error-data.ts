// import * as Sentry from '@sentry/react';
// import {store} from '@storehouse/store';

export const sendErrorData = (error:any, info?:any) => {
    console.log(error, info);

    // const {metadata, game-route, gameParams} = store.getState();
    // const {user} = metadata.common;
    // const {config, settings} = gameParams ? gameParams : null;
    // const gameName = config?.gameName;

    // Sentry.configureScope((scope) => {
    //     scope.setExtra('user&settings&game-route&gameName&components',
    //         {
    //             user,
    //             settings: JSON.stringify(settings),
    //             game-route: JSON.stringify(game-route),
    //             gameName,
    //             components: info?.componentStack
    //         });
    // });

    // console.warn(JSON.stringify({
    //     user,
    //     settings,
    //     game-route,
    //     gameName,
    //     components: info?.componentStack
    // }));

    // Sentry.captureException(error);
};