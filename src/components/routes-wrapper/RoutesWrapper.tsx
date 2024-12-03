import React, {useEffect} from 'react';

import {checkUrl} from './url-checker';

import {AllRoutes} from './all-routes';

export const RoutesWrapper = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        checkUrl();
    }, []);

    return <AllRoutes/>;
};
