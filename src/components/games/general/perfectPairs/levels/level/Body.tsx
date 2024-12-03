import React from 'react';

import {Content} from './content';

import {onCheckingAnswer, useCurrentStateGame, onSelectOption} from './utils';

import {HandleCheckingAnswerT, HandleSelectOptionT, PerfectPairsT} from './type';

export const Body = (props:PerfectPairsT) => {
    const {gamePlayData, gameData} = props.game;

    const {selectedVariant} = gamePlayData;
    const {speakTexts, changeGPDOnline, initFinishPlaying} = props;

    useCurrentStateGame({gameData, gamePlayData, initFinishPlaying, changeGPDOnline, speakTexts});
    const handleCheckAnswer:HandleCheckingAnswerT = () => onCheckingAnswer({gameData, gamePlayData, speakTexts, changeGPDOnline});

    const handleSelectOption:HandleSelectOptionT = (variant) => onSelectOption({
        variant,
        selectedVariant,
        changeGPDOnline
    });

    return <Content
        gamePlayData={gamePlayData}
        gameData={gameData}

        handleCheckingAnswer={handleCheckAnswer}
        handleSelectAnswer={handleSelectOption}
    />;
};
