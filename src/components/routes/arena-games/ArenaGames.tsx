import React, {useLayoutEffect} from 'react';

import {arenaGames} from '@games-info';

import {GamesLinks} from '@components/routes/components';
import {runHideLoader} from '@reducers/preloader/dispatchers';

export default () => {
    useLayoutEffect(() => {
        runHideLoader(1000);
    }, []);

    return <GamesLinks
        games={arenaGames}
        gamesSection={'arena'}/>;
};
