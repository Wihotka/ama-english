import React, {useEffect} from 'react';
import {isEmpty} from 'lodash';

import {globalGameConfig} from '@global-config/game';
import {changeGameSettingsAndConfig, deleteAllGameData} from '@reducers/game/dispatchers';

import {getGameImagesPaths, getSettings} from './utils';
import {Content} from './content';
import {
    GameConfig,
    GameInput,
    GameLevels,
    InitialGameConfig, InitializedGameConfig
} from '@custom-types';
import {runHideLoader} from '@reducers/preloader/dispatchers';

type P = GameInput & {
    config:InitialGameConfig;
    gameLevels:GameLevels;
};

export const GameInner = (p:P) => {
    const {gameName, studyStage, config, gameLevels, hometaskID, settings: initSettings, section, gameMode} = p;
    const {gameConfig, settingsTemplate} = config;
    const {gameImages, valuesThresholds, ...otherGameConfig} = gameConfig;

    const isHomework = !isEmpty(initSettings);
    const settings = getSettings(isHomework, initSettings, settingsTemplate);

    const finalGameConfig:GameConfig = {
        ...otherGameConfig,
        gameName,
        section,
        gameMode,
        studyStage,
        hometaskID: hometaskID,
        isHomework,
        valuesThresholds: valuesThresholds ? valuesThresholds : globalGameConfig.valuesThresholds,
        ...gameImages && {imagesPaths: getGameImagesPaths(gameName, gameImages, section)}
    };

    const fullGameConfig:InitializedGameConfig = {
        gameConfig: finalGameConfig,
        settingsTemplate
    };

    useEffect(() => {
        changeGameSettingsAndConfig({
            gameConfig: finalGameConfig,
            gameSettings: settings
        });

        runHideLoader(300);
        
        return () => {
            deleteAllGameData();
        };
    }, [studyStage]);

    return <Content
        isHomework={isHomework}
        config={fullGameConfig}
        gameLevels={gameLevels}/>;
};
