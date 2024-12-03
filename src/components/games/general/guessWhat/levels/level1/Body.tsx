import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {sampleSize} from 'lodash';
import React from 'react';
import {GuessWhatT, GuessWhat_GamePlayData} from '../../type';
import {Content} from './content';

export const Body = ({
    game,
    changeGPDOnline,
    speakTexts,
    initFinishPlaying,
}:GuessWhatT) => {
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty} = gameSettings;
    const {taskData, maxMistakesQty} = gameData;
    const {
        currentQ,
        firstTryCorrectAnswersQty,
        secondTryCorrectAnswersQty,
        userAnswer,
        mistakesQty,
        hiddenAnswers,
        isHintUsed,
        isCheckBtnDisabled,
    } = gamePlayData;
    const {taskWord, answers} = taskData[currentQ];
    const {soundUrl, word: correctAnswer} = taskWord;

    const changeUserAnswer = (userAnswer:string) => {
        changeGPDOnline<GuessWhat_GamePlayData>({
            userAnswer,
            isCheckBtnDisabled: false,
        });
    };

    const handleIterationChange = (
        iterationChange:boolean,
        isLastIteration:boolean
    ) => {
        if (isLastIteration && iterationChange) {
            initFinishPlaying();
        } else {
            changeGPDOnline<GuessWhat_GamePlayData>({
                currentQ: iterationChange ? currentQ + 1 : currentQ,
                mistakesQty: iterationChange ? 0 : mistakesQty + 1,
                highlight: false,
                isCorrect: false,
                userAnswer: '',
                isHintUsed: iterationChange ? false : isHintUsed,
                hiddenAnswers: iterationChange ? [] : hiddenAnswers,
                isFieldDisabled: false,
            });
        }
    };

    const checkAnswer = () => {
        const isCorrect = userAnswer === correctAnswer;
        const isMaxMistakes = mistakesQty + 1 === maxMistakesQty;
        const iterationChange = isCorrect || isMaxMistakes;
        const isLastIteration = currentQ === answersQty - 1;
        const isFirstTry = isCorrect && mistakesQty === 0;
        const isSecondTry = isCorrect && mistakesQty === 1;

        changeGPDOnline<GuessWhat_GamePlayData>({
            isCorrect,
            highlight: true,
            isCheckBtnDisabled: true,
            isFieldDisabled: true,
            firstTryCorrectAnswersQty: isFirstTry
                ? firstTryCorrectAnswersQty + 1
                : firstTryCorrectAnswersQty,
            secondTryCorrectAnswersQty: isSecondTry
                ? secondTryCorrectAnswersQty + 1
                : secondTryCorrectAnswersQty,
        });

        if (isCorrect) {
            speakTexts({
                text: '',
                path: soundUrl,
                onFinishPlaying: () => {
                    handleIterationChange(iterationChange, isLastIteration);
                },
            });
        } else {
            setGameTimeout(() => {
                handleIterationChange(iterationChange, isLastIteration);
            }, 1000);
        }
    };

    const handleHintClick = () => {
        if (isHintUsed) return;

        const wrongAnswers = answers
            .map(({word}) => word)
            .filter((w) => w !== correctAnswer);
        const hiddenAnswers = sampleSize(wrongAnswers, 2);
        const isUserAnswerHidden = hiddenAnswers.includes(userAnswer);

        changeGPDOnline<GuessWhat_GamePlayData>({
            hiddenAnswers,
            isHintUsed: true,
            isCheckBtnDisabled: isUserAnswerHidden ? true : isCheckBtnDisabled,
            userAnswer: isUserAnswerHidden ? '' : userAnswer,
        });
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            changeUserAnswer={changeUserAnswer}
            checkAnswer={checkAnswer}
            handleHintClick={handleHintClick}
        />
    );
};
