import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {StoreInner} from '@store';

import {SettingsWindow} from '@components/common/game/settings-window';

import {LevelResolver, BottomNavigation} from './parts';

import {DefaultGame, GameLevels, InitializedGameConfig} from '@custom-types';
import {isEmpty} from 'lodash';
import {runGame} from '@reducers/game/dispatchers';

type P = {
    isHomework:boolean;
    config:InitializedGameConfig;
    gameLevels:GameLevels;
};

export const Content = (p:P) => {
    const {config, isHomework} = p;
    const game:DefaultGame = useSelector((store:StoreInner) => store.game) as DefaultGame;
    const {status, gameSettings, /*gameConfig*/} = game;

    const {isRunGame} = status;

    useEffect(() => {
        if (isHomework && !isEmpty(gameSettings)) {
            runGame();
        }
    }, [gameSettings]);

    if (isHomework && isEmpty(gameSettings)) {
        return null;
    }

    if (isHomework) {
        return (
            <>
                <LevelResolver {...p} game={game}/>
                <BottomNavigation gameStatus={status} isHomework={isHomework}/>
            </>
        );
    }

    return (
        <>
            {isRunGame
                ? <LevelResolver {...p} game={game}/>
                : <SettingsWindow gameSettings={gameSettings} config={config} />}
            <BottomNavigation gameStatus={status} isHomework={isHomework}/>
        </>
    );
};
