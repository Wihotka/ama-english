import React, {useRef} from 'react';

import {Content} from './content';

import {handleFeather, handlePlay, move, useStartParams} from './utils';

import {LevitationT} from './type';

export const Body = (props:LevitationT) => {
    const {game, changeGPDOnline, initFinishPlaying, speakTexts} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {coordinatesAndDirections, availableCoordinates} = gamePlayData;
    const {level, speed} = gameSettings;

    const handleFeatherCB = (index:number) =>
        handleFeather({index, changeGPDOnline, initFinishPlaying, gameData, gamePlayData, gameSettings});
    const handlePlayCB = () =>
        handlePlay({changeGPDOnline, speakTexts, gameData, gamePlayData, level});

    const field = useRef(null);
    const feather = useRef(null);

    // mutation qty per second
    const fps = 100;

    const startMove = () => move({speed, coordinatesAndDirections, availableCoordinates, changeGPDOnline});

    useStartParams({fps, field, feather, speed, changeGPDOnline, gamePlayData, startMove});

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}

            handleFeatherCB={handleFeatherCB}
            handlePlayCB={handlePlayCB}

            field={field}
            feather={feather}
            level={level}
        />
    );
};