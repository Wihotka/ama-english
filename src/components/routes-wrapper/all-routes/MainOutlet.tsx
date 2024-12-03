import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const MainOutletBody = lazy(() => import('./MainOutletBody'));

export const MainOutlet = () =>
    <React.Suspense fallback={<Preloader/>}>
        <MainOutletBody/>
    </React.Suspense>;