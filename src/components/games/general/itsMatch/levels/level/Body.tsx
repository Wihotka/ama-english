import React from 'react';

import {Content} from './content';

import {onCheckingAnswer, onVoicePlay, useCurrentStateGame, onSelectOption} from './utils';

import {HandleCheckingAnswerT, HandleSelectOptionT, HandleVoiceT, ItsMatchT} from './type';

export const Body = (props:ItsMatchT) => {
    const {gamePlayData, gameData} = props.game;

    const {selectedVariant} = gamePlayData;
    const {speakTexts, changeGPDOnline, initFinishPlaying} = props;

    useCurrentStateGame({gameData, gamePlayData, initFinishPlaying, changeGPDOnline, speakTexts});
    const handleCheckAnswer:HandleCheckingAnswerT = () => onCheckingAnswer({gameData, gamePlayData, changeGPDOnline});

    const handleVoice:HandleVoiceT = (variant, field) => onVoicePlay({
        variant,
        field,
        changeGPDOnline,
        speakTexts
    });

    const handleSelectOption:HandleSelectOptionT = (variant) => onSelectOption({
        variant,
        selectedVariant,
        changeGPDOnline
    });

    return <Content
        gamePlayData={gamePlayData}
        gameData={gameData}

        handleVoice={handleVoice}
        handleCheckingAnswer={handleCheckAnswer}
        handleSelectAnswer={handleSelectOption}
    />;
};
