import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {FunGamesInfo, GamesSection, GeneralGamesInfo} from '@games-info';
import {setPageTitle} from '@reducers/page-title/dispatchers';

import {GamesList} from '@components/common/game';

type P = {
    games:GeneralGamesInfo | FunGamesInfo;
    gamesSection:GamesSection;
};

export const GamesLinks = ({games, gamesSection}:P) => {
    const navigate = useNavigate();
    const {t} = useTranslation('games/translation');
    const gamesStr = t('games');

    useEffect(() => {
        setPageTitle(gamesStr);
    }, [gamesStr]);

    const selectGameHandler = (gameName:string) => {
        navigate(gameName);
    };

    return (
        <GamesList
            games={games}
            gamesSection={gamesSection}
            selectGameHandler={selectGameHandler}/>
    );
};
