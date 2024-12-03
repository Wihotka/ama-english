import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const LevelsGamesBody = lazy(() => import('./LevelsGames'));

export const LevelsGames = () =>
    <React.Suspense fallback={<Preloader/>}>
        <LevelsGamesBody/>
    </React.Suspense>;