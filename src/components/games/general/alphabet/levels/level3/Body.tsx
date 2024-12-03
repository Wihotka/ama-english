import React from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {Content} from './content';

import {AlphabetL3T} from './type';

export const Body = (p:AlphabetL3T) => {
    const {game, changeGPDOnline, initFinishPlaying} = p;
    const {gamePlayData, gameData, gameSettings, gameConfig} = game;
    const {currentIndex, wrongAnswersQty, iteration, correctAnswersQty} = gamePlayData;
    const {lettersQty} = gameSettings;
    const {data} = gameData;
    const {studyStage} = gameConfig;

    const handleClick = (index:number) => {
        if (index === currentIndex) {
            const needChangeIteration = lettersQty - 1 === currentIndex;

            changeGPDOnline({
                currentIndex: currentIndex + 1,
                correctAnswersQty: correctAnswersQty + 1,
                answerIsCorrect: true
            });

            if (needChangeIteration) {
                setGameTimeout(() => {
                    if (!data[iteration + 1]) {
                        initFinishPlaying();
                    }

                    changeGPDOnline({
                        iteration: iteration + 1,
                        currentIndex: 0
                    });
                }, 1000);
            }
        } else {
            changeGPDOnline({
                mistakeIndex: index,
                answerIsCorrect: false,
                wrongAnswersQty: wrongAnswersQty + 1,
            });

            setGameTimeout(() => changeGPDOnline({
                mistakeIndex: null
            }), 1000);
        }
    };

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}
            studyStage={studyStage}
            handleClick={handleClick}
        />
    );
};
