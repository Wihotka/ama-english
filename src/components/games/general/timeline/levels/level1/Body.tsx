import React from 'react';

import {Content} from './content';

import {onCheckingAnswer, useCurrentStateGame, onSelectOption} from './utils';

import {TimelineL1T, HandleCheckingAnswer, HandleSelectOption} from './type';

export const Body = (props:TimelineL1T) => {

    const {gamePlayData, gameData} = props.game;

    const {selectedVariant} = gamePlayData;
    const {speakTexts, changeGPDOnline, initFinishPlaying} = props;

    useCurrentStateGame({
        gameData,
        gamePlayData,

        initFinishPlaying,
        changeGPDOnline,
        speakTexts});

    const handleCheckAnswer:HandleCheckingAnswer = () => onCheckingAnswer({
        gameData,
        gamePlayData,

        changeGPDOnline});

    const handleSelectOption:HandleSelectOption = (variant) => onSelectOption({
        variant,
        selectedVariant,

        changeGPDOnline
    });

    return <Content
        gamePlayData={gamePlayData}
        gameData={gameData}

        handleCheckingAnswer={handleCheckAnswer}
        handleSelectOption={handleSelectOption}
    />;
};