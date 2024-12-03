import React from 'react';

import {Content} from './content';

import {onInputText, onCheckingAnswer, onOpenHint, useGame} from './utils';

import {PhraseJumpingT} from './type';

export const Body = (props:PhraseJumpingT) => {
    const {game, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {variants, hintContent} = gameData;
    const {answersQty, theme} = gameSettings;
    const {
        question,
        inputText,
        punctuationMark,
        hintType,

        correctAnswers,
        correctAnswerQty,
        numberAttempts,
        iteration,

        isHint,
        isFieldUpdate,
        isCorrectAnswer,
        isOpenHint,
        isBtnDisabled
    } = gamePlayData;

    useGame({variants, iteration, answersQty, isFieldUpdate, changeGPDOnline, initFinishPlaying});

    const handlerInputText = (text:string) => onInputText({text, changeGPDOnline});
    const handlerOnOpenHint = () => onOpenHint({changeGPDOnline});
    const handlerCheckingAnswer = () => onCheckingAnswer({
        correctAnswers,
        correctAnswerQty,
        iteration,
        numberAttempts,
        inputText,
        changeGPDOnline
    });

    return (
        <Content
            question={question}
            inputText={inputText}
            punctuationMark={punctuationMark}
            theme={theme}

            hintContent={hintContent}
            hintType={hintType}

            handlerOnOpenHint={handlerOnOpenHint}
            handlerInputText={handlerInputText}
            handleCheckingAnswer={handlerCheckingAnswer}

            isHint={isHint}
            isOpenHint={isOpenHint}
            isCorrectAnswer={isCorrectAnswer}
            isFieldUpdate={isFieldUpdate}
            isBtnDisabled={isBtnDisabled}
        />

    );
};