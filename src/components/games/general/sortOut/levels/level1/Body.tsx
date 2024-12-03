import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {SortOutT, SortOut_GamePlayData} from '../../type';
import {Content} from './content';
import {CheckAnswerOnDropT} from './type';

export const Body = ({
    game,
    changeGPDOnline,
    initFinishPlaying,
}:SortOutT) => {
    const {gameData, gamePlayData, gameSettings, gameConfig} = game;
    const {imagesPaths} = gameConfig;
    const {answersQty} = gameSettings;
    const {gameTasks} = gameData;
    const {currentTask, correctAnswersQty} = gamePlayData;

    const checkAnswer:CheckAnswerOnDropT = (guessIndex, guessImage) => {
        const task = gameTasks[currentTask];
        const {answerElement} = task;
        const {index, image} = answerElement;
        const isCorrect = guessIndex === index && guessImage === image;
        const isLast = answersQty - 1 === currentTask;

        changeGPDOnline<SortOut_GamePlayData>({
            correctAnswersQty: isCorrect
                ? correctAnswersQty + 1
                : correctAnswersQty,
            isCorrect,
            highlightIndex: guessIndex,
            highlight: true,
            selectedElement: {
                image: guessImage,
                index: guessIndex,
            },
            isDragDisabled: true,
        });

        setGameTimeout(() => {
            if (isLast) {
                initFinishPlaying();
            } else {
                changeGPDOnline<SortOut_GamePlayData>({
                    currentTask: currentTask + 1,
                    isCorrect: false,
                    highlightIndex: -1,
                    highlight: false,
                    selectedElement: {
                        image: -1,
                        index: -1,
                    },
                    isDragDisabled: false,
                });
            }
        }, 1000);
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            imagesPaths={imagesPaths}
            checkAnswer={checkAnswer}
        />
    );
};
