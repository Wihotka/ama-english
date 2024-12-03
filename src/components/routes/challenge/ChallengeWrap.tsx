import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const ChallengeBody = lazy(() => import('./Challenge'));

export const Challenge = () =>
    <React.Suspense fallback={<Preloader/>}>
        <ChallengeBody/>
    </React.Suspense>;