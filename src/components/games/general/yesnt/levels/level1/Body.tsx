import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {YesntT, Yesnt_GamePlayData} from '../../type';
import {Content} from './content';
import {ChangeUserAnswerT} from './type';
import {isLevel1Task} from './utils';

export const Body = ({game, changeGPDOnline, initFinishPlaying}:YesntT) => {
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty, course} = gameSettings;
    const {
        taskData
    } = gameData;
    const {currentQ, userAnswer, correctAnswersQty, isTaskBtnDisabled} = gamePlayData;

    const changeUserAnswer:ChangeUserAnswerT = (newValue) => {
        if (isTaskBtnDisabled) return;

        changeGPDOnline<Yesnt_GamePlayData>({
            userAnswer: newValue,
            isCheckBtnDisabled: false,
            chosenBtn: newValue ? 'true' : 'false'
        });
    };

    const checkAnswer = () => {
        let correctAnswer:boolean;

        if (isLevel1Task(taskData)) {
            const {taskQuestions} = taskData;

            correctAnswer = taskQuestions[currentQ].correctAnswer;
        } else {
            const {taskQuestion} = taskData[currentQ];

            correctAnswer = taskQuestion.correctAnswer;
        }

        const isCorrect = correctAnswer === userAnswer;
        const isLast = currentQ === answersQty - 1;

        changeGPDOnline<Yesnt_GamePlayData>({
            isCorrect,
            highlight: userAnswer ? 'true' : 'false',
            isCheckBtnDisabled: true,
            isTaskBtnDisabled: true,
        });

        setGameTimeout(() => {
            changeGPDOnline<Yesnt_GamePlayData>({
                currentQ: isLast ? currentQ : currentQ + 1,
                correctAnswersQty: isCorrect
                    ? correctAnswersQty + 1
                    : correctAnswersQty,
                highlight: null,
                isCorrect: false,
                userAnswer: false,
                isTaskBtnDisabled: false,
                chosenBtn: null
            });

            isLast && initFinishPlaying();
        }, 1000);
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            course={course}
            changeUserAnswer={changeUserAnswer}
            checkAnswer={checkAnswer}
        />
    );
};
