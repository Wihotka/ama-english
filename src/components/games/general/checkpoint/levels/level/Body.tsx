import React from 'react';

import {Content} from './content';

import {handleCard, handleInput, handlePlay, compareValues, updateField} from './utils';

import {CheckpointT, handleCardCBT, handlePlayCBT, handleInputCBT, compareValuesCBT, updateFieldCBT} from './type';

export const Body = (props:CheckpointT) => {
    const {game, speakTexts, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {options, keyboard} = gameData;
    const {
        answerQty,
        mistakeQty,
        inputValue,
        errorCardIndexes,
        hiddenCardIndexes,
        currentOptionIndex,
        correctWithFirstTryQty,
        correctWithSecondTryQty
    } = gamePlayData;
    const {course} = gameSettings;

    const handleCardCB:handleCardCBT = (index, id) =>
        handleCard({id, index, answerQty, changeGPDOnline, currentOptionIndex});
    const handleInputCB:handleInputCBT = (e) =>
        handleInput({e, keyboard, changeGPDOnline});
    const handlePlayCB:handlePlayCBT = () =>
        handlePlay({options, speakTexts, changeGPDOnline, currentOptionIndex});

    const updateFieldCB:updateFieldCBT = () =>
        updateField({options, answerQty, changeGPDOnline, initFinishPlaying});
    const compareValuesCB:compareValuesCBT = () =>
        compareValues({
            options,
            mistakeQty,
            inputValue,
            updateFieldCB,
            changeGPDOnline,
            errorCardIndexes,
            hiddenCardIndexes,
            currentOptionIndex,
            correctWithFirstTryQty,
            correctWithSecondTryQty
        });

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}

            handlePlayCB={handlePlayCB}
            handleCardCB={handleCardCB}
            handleInputCB={handleInputCB}

            compareValuesCB={compareValuesCB}
            course={course}/>
    );
};