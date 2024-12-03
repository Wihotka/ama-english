import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const FunGamesBody = lazy(() => import('./FunGames'));

export const FunGames = () =>
    <React.Suspense fallback={<Preloader/>}>
        <FunGamesBody/>
    </React.Suspense>;