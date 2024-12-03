import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {GameWrapper} from '@components/common/game';
import {subjectInfoSelectors} from '@reducers/subject-info/selectors';

import {GamesSection} from '@games-info';
import {setPageTitle} from '@reducers/page-title/dispatchers';

import {useAsyncState} from '@lib/custom-hooks';
import {ApiConnector} from '@lib/api-connector';

import {GamePageData} from './type';
import {AllGameSettings, GameMode} from '@custom-types';

export default ({section}:{section:GamesSection}) => {
// export const GameRoute = ({section}:{section:GamesSection}) => {
    const [gamePageData, setGamePageData] = useAsyncState<GamePageData|null>(null);
    const params = useParams();
    const studyStage = useSelector(subjectInfoSelectors.studyStage);
    const {t} = useTranslation(`games/${section}/translation`);
    const {gameName = ''} = params;

    const gameNameStr = t(gameName);
    const isHomework = !!new URLSearchParams(location.search).get('isHomework');

    useEffect(() => {
        setPageTitle(gameNameStr);
    }, [gameName]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ApiConnector.getGamePageData(isHomework, gameName, {}).then((data) => setGamePageData(data));
    }, [gameName]);

    if (!gameName) return null;

    if (!gamePageData) return null;

    const {gameSettings, id} = gamePageData.homework || {};
    const settings = gameSettings?.settings as AllGameSettings;
    // const {settings} = gameSettings || {} as AllGameSettings;
    const gameMode = id ? GameMode.homework : GameMode.free;

    return (
        <GameWrapper
            gameName={gameName}
            studyStage={+studyStage}
            section={section}
            gameMode={gameMode}
            settings={settings}
            hometaskID={id}/>
    );
};
