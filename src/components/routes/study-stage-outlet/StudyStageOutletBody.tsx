import React/*, {useLayoutEffect} */from 'react';
import {useLocation} from 'react-router-dom';

// import * as themes from '@theme/schema.json';
import {MainTitle, NavPanel} from './parts';
import {useNeedShowGameBurger} from '@lib/custom-hooks';
// import {showLoader} from '@reducers/preloader/dispatchers';
import {pathConfig} from '@global-config/path-config';
import {useSelector} from 'react-redux';
import {gameSelectors} from '@reducers/game/selectors';
import {subjectInfoSelectors} from '@reducers/subject-info/selectors';

export default () => {
    const {pathname} = useLocation();
    const {isPlaying} = useSelector(gameSelectors.gameStatus);
    const needShowGameBurger = useNeedShowGameBurger();
    const studyStage = useSelector(subjectInfoSelectors.studyStage);
    const isFunGames = pathname.includes(pathConfig.funGames);
    const isArenaGames = pathname.includes(pathConfig.arenaGames);

    const bgPath = isFunGames
        ? 'funGames'
        : isArenaGames
            ? 'arenaGames'
            : `stage${studyStage}`;

    document.body.style.background = `url(${require(`/assets/img/studyStages/${bgPath}.jpg`)}) 0% 0% / cover fixed`;

    // document.body.style.background = `url(${require('/assets/img/studyStages/pageBg.png')}) repeat 0% 0% `;

    return (
        <NavPanel needShowGameBurger={needShowGameBurger} isPlaying={isPlaying}>
            <MainTitle
                needShowGameBurger={needShowGameBurger}
                isFunGames={isFunGames}
                isPlaying={isPlaying}
                studyStage={studyStage}
            />
        </NavPanel>
    );
};
