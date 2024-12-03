import React, {FC, useContext, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {addGameData, startPlaying as startPlayingD} from '@reducers/game/dispatchers';
import {metadataSelectors} from '@reducers/metadata/selectors';
import {getWords, preloadSounds} from '@lib/game/utils';
import {staticEngData} from '@lib/game/static-data';
// import {Preloader} from '@components/common';
import {LevelWrapperPropsContext} from '@components/common/game/game-inner/content/parts/level-resolver/LevelResolver';

import {Content} from './content';

import {LevelWrapperT} from './type';

export const LevelWrapper:FC<LevelWrapperT> = (p) => {
    const {generateGameData, startPlaying, children, ...otherP} = p;
    const langCode = useSelector(metadataSelectors.nativeLangCode);
    const {game, isInitializedData} = useContext(LevelWrapperPropsContext);
    const {gameConfig, gameSettings, status} = game;
    const {isPlaying, isFinishPlaying} = status;

    useEffect(() => {
        let isMounted = true;

        generateGameData({gameConfig, gameSettings, langCode, staticEngData, getWords, preloadSounds})
            .then(gameData => {
                if (isMounted) addGameData(gameData);
            });
        
        return () => {isMounted = false;};
    }, []);

    useEffect(() => {
        if (isPlaying && !isFinishPlaying) {
            const {gameConfig, gameSettings, gameData} = game;
            const initGPData = startPlaying({gameData, gameConfig, gameSettings});

            startPlayingD(initGPData);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying && isFinishPlaying) {
            runRestartPlaying().then();
        }
    }, [isPlaying, isFinishPlaying]);

    const runRestartPlaying = async () => {
        const gameData = await generateGameData({gameConfig, gameSettings, langCode, staticEngData, getWords, preloadSounds});

        await addGameData(gameData);

        const initGPData = startPlaying({gameData, gameConfig, gameSettings});

        startPlayingD(initGPData);
    };

    return !isInitializedData
        ? null
        : <Content
            {...otherP}
            game={game}>
            {children}
        </Content>;
};
