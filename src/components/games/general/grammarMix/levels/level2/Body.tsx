import React from 'react';

import {Content} from './content';

import {onCheckingAnswer, onInputText, useGame} from './utils';

import {GrammarMixT2, HandlerInputText} from './type';

export const Body = (props:GrammarMixT2) => {
    const {game, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty} = gameSettings;
    const {
        question,
        inputText,
        correctAnswer,
        correctAnswerQty,
        iteration,
        numberAttempts,
        indexVariantsAnswer,
        isCorrectAnswer,
        isFieldUpdate
    } = gamePlayData;

    useGame({...gameData, ...gamePlayData, answersQty, changeGPDOnline, initFinishPlaying});

    const handleCheckingAnswer = () => onCheckingAnswer({
        correctAnswer,
        inputText,
        iteration,
        numberAttempts,
        correctAnswerQty,
        changeGPDOnline
    });

    const handlerTextInput:HandlerInputText = (text) => onInputText({text, changeGPDOnline});

    return (
        <Content
            question={question}
            inputText={inputText}
            correctAnswer={correctAnswer}
            indexVariantsAnswer={indexVariantsAnswer}

            handlerInputText={handlerTextInput}
            handleCheckingAnswer={handleCheckingAnswer}

            isCorrectAnswer={isCorrectAnswer}
            isFieldUpdate={isFieldUpdate}
        />
    );
};