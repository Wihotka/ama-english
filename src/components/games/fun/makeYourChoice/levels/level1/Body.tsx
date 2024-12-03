import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {MakeYourChoiceT, MakeYourChoice_GamePlayData} from '../../type';
import {Content} from './content';
import {CheckAnswerT} from './type';

export const Body = ({
    game,
    changeGPD
}:MakeYourChoiceT) => {
    const {gameData, gamePlayData, gameSettings} = game;
    const {level} = gameSettings;
    const {
        currentQ,
        pointsPerAnswer,
        streak,
        score,
        correctAnswersQty,
        isAnswerBtnPressed,
    } = gamePlayData;
    const showImage = level === 1;

    const checkAnswer:CheckAnswerT = (isCorrect, btnIndex) => {
        if (isAnswerBtnPressed) return;

        changeGPD<MakeYourChoice_GamePlayData>({
            highlight: true,
            btnIndex,
            isCorrectAnswer: isCorrect,
            streak: isCorrect ? streak + 1 : 0,
            isAnswerBtnPressed: true,
        });

        if (streak === 4 && isCorrect) {
            setGameTimeout(() => {
                changeGPD<MakeYourChoice_GamePlayData>({
                    streak: 0,
                });
            }, 500);
        }

        setGameTimeout(() => {
            changeGPD<MakeYourChoice_GamePlayData>({
                currentQ: currentQ + 1,
                highlight: false,
                pointsPerAnswer:
                    isCorrect && streak === 4
                        ? pointsPerAnswer + 10
                        : pointsPerAnswer,
                score: isCorrect ? score + pointsPerAnswer : score,
                correctAnswersQty: isCorrect
                    ? correctAnswersQty + 1
                    : correctAnswersQty,
                isAnswerBtnPressed: false,
            });
        }, 500);
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            showImage={showImage}
            checkAnswer={checkAnswer}
        />
    );
};
