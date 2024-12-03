import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const ErrorWindowBody = lazy(() => import('./ErrorWindow'));

export const ErrorWindow = () =>
    <React.Suspense fallback={<Preloader/>}>
        <ErrorWindowBody/>
    </React.Suspense>;