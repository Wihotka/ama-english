import React from 'react';

import {Content} from './content';

import {handlePlane, fieldUpdate, useTimer} from './utils';

import {AirWordT, handlePlaneCBT, fieldUpdateCBT} from './type';

export const Body = (props:AirWordT) => {
    const {game, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty, speedInSeconds} = gameSettings;
    const {correctWords} = gameData;
    const {timer, mistakeQty, userAnswerQty, currentWordsIndex, successWithFirstTry, successWithSecondTry} = gamePlayData;

    const handlePlaneCB:handlePlaneCBT = (word) =>
        handlePlane({
            word,
            timer,
            mistakeQty,
            correctWords,
            fieldUpdateCB,
            changeGPDOnline,
            currentWordsIndex
        });    

    const fieldUpdateCB:fieldUpdateCBT = (isCorrectAnswer) =>
        fieldUpdate({
            mistakeQty,
            answersQty,
            userAnswerQty,
            speedInSeconds,
            changeGPDOnline,
            isCorrectAnswer,
            initFinishPlaying,
            currentWordsIndex,
            successWithFirstTry,
            successWithSecondTry
        });

    useTimer({timer, changeGPDOnline, fieldUpdateCB});

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            gameSettings={gameSettings}

            handlePlaneCB={handlePlaneCB}/>
    );
};