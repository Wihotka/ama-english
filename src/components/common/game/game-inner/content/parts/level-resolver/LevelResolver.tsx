import React, {createContext, useEffect} from 'react';
import {isEmpty} from 'lodash';

import {DefaultGame, GameLevels, InitialGameConfig, InitialGameProps} from '@custom-types';
import {clearAllGameTimeoutInterval} from 'amakids-games-utils-and-generations/lib/utils';
import {LevelWrapper} from '@components/common/game/level-wrapper';
import {changeGPDOnline, changeGPD, initFinishPlaying} from '@lib/game/actions';
import {speakTexts} from '@lib/game/utils';

type P = {
    game:DefaultGame;
    config:InitialGameConfig;
    gameLevels:GameLevels;
};

export type LevelWrapperPropsContextP = {
    game:DefaultGame;
    isInitializedData:boolean;
    isInitializedGPData:boolean
};

// @ts-ignore
export const LevelWrapperPropsContext = createContext<LevelWrapperPropsContextP>(null);

export const LevelResolver = (p:P) => {
    const {gameLevels, game} = p;
    const {gameSettings: {level}, gameData, gamePlayData} = game;
    const resolver = gameLevels['level' + level];

    useEffect(() => () => {clearAllGameTimeoutInterval();}, []);

    const isInitializedData = !isEmpty(gameData);
    const isInitializedGPData = !isEmpty(gamePlayData);

    const gameProps:InitialGameProps<{}, any, {}, {}> = {
        game,
        isInitializedData,
        isInitializedGPData,
        LevelWrapper,
        // @ts-ignore
        changeGPD,
        // @ts-ignore
        changeGPDOnline,
        // @ts-ignore
        initFinishPlaying,
        speakTexts
    };

    const context:LevelWrapperPropsContextP = {
        game,
        isInitializedData,
        isInitializedGPData,
    };

    return <LevelWrapperPropsContext.Provider value={context}>{resolver(gameProps)}</LevelWrapperPropsContext.Provider>;
};
