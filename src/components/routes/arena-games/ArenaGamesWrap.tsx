import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const ArenaGamesBody = lazy(() => import('./ArenaGames'));

export const ArenaGames = () =>
    <React.Suspense fallback={<Preloader/>}>
        <ArenaGamesBody/>
    </React.Suspense>;