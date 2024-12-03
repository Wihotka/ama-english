import React from 'react';

import {Content} from './content';

import {onCheckingAnswer, onVoicePlay, useCurrentStateGame, onSelectOption} from './utils';

import {GuessTheSoundL1T, HandleSelectOption, TypeField} from './type';

export const Body = (props:GuessTheSoundL1T) => {
    const {gamePlayData, gameData} = props.game;
    const {speakTexts, changeGPDOnline, initFinishPlaying} = props;
    const {selectedVariant} = gamePlayData;

    useCurrentStateGame({gameData, gamePlayData, initFinishPlaying, changeGPDOnline, speakTexts});
    const handleVoice = (sound:string, field:TypeField) => onVoicePlay({sound, field, changeGPDOnline, speakTexts});
    const handleCheckAnswer = () => onCheckingAnswer({gamePlayData, changeGPDOnline, gameData});
    const handleSelectOption:HandleSelectOption = (variant) => onSelectOption({
        variant,
        selectedVariant,
        changeGPDOnline
    });

    return <Content
        gamePlayData={gamePlayData}
        gameData={gameData}
        handleVoice={handleVoice}
        handleCheckingAnswer={handleCheckAnswer}
        handlerSelectAnswer={handleSelectOption}
    />;
};