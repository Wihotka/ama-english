import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const NotFoundBody = lazy(() => import('./NotFound'));

export const NotFound = () =>
    <React.Suspense fallback={<Preloader/>}>
        <NotFoundBody/>
    </React.Suspense>;