import React from 'react';

import {
    setGameTimeout
} from 'amakids-games-utils-and-generations/lib/utils';

import {Content} from './content';

import {LegoLetterL2T} from './type';

export const Body = (p:LegoLetterL2T) => {
    const {game, changeGPDOnline, speakTexts, initFinishPlaying} = p;
    const {gamePlayData, gameData} = game;
    const {data} = gameData;
    const {iteration, mistakesPerAnswerQty, correctAnswersQty, answer} = gamePlayData;
    const {currentLetter} = data[iteration];

    const clickHandler = ({letter}:{ letter:string }) => {
        const isCorrect = letter.toUpperCase() === currentLetter.toUpperCase();

        changeGPDOnline({
            answer: answer.letter === letter ? {letter: '', isCorrect: false} : {letter, isCorrect},
        });
    };

    const checkAnswer = () => {
        const {letter, isCorrect} = answer;

        changeGPDOnline({
            correctAnswersQty: isCorrect ? correctAnswersQty + 1 : correctAnswersQty,
            gameIsActive: false,
            isAnswerChecked: true
        });

        if (isCorrect) speakTexts({text: letter, type: 'letter'});

        setGameTimeout(() => {
            if (iteration >= data.length - 1 && (isCorrect || !!mistakesPerAnswerQty)) {
                initFinishPlaying();
            } else {
                changeGPDOnline({
                    iteration: (isCorrect || !!mistakesPerAnswerQty) ? iteration + 1 : iteration,
                    mistakesPerAnswerQty: (!isCorrect && !mistakesPerAnswerQty) ? 1 : 0,
                    answer: {letter: '', isCorrect: false},
                    gameIsActive: true,
                    isAnswerChecked: false
                });
            }
        }, 1000);
    };

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}
            clickHandler={clickHandler}
            checkAnswer={checkAnswer}
        />
    );
};
