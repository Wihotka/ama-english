import React, {lazy} from 'react';

import {Preloader} from '@components/common';
import {GamesSection} from '@games-info';

const GameRouteBody = lazy(() => import('./GameRoute'));

export const GameRoute = ({section}:{section:GamesSection}) =>
    <React.Suspense fallback={<Preloader/>}>
        <GameRouteBody section={section}/>
    </React.Suspense>;