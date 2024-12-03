import React from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {Content} from './content';

import {LegoLetterL1T} from './type';

export const Body = (p:LegoLetterL1T) => {
    const {game, speakTexts, changeGPDOnline, initFinishPlaying} = p;
    const {gamePlayData, gameData} = game;
    const {selectedIndexes, iteration, correctAnswersQty, mistakesPerAnswerQty} = gamePlayData;
    const {data} = gameData;
    const {letterPaths, letter} = data[iteration];

    const handleClick = (index:number | null, position:number) => {
        const isCorrect = index !== null;

        changeGPDOnline({
            currentAnswer: {index: position, isCorrect},
            mistakesPerAnswerQty: isCorrect ? mistakesPerAnswerQty : mistakesPerAnswerQty + 1,
            selectedIndexes: isCorrect ? [...selectedIndexes, index] : selectedIndexes
        });

        setGameTimeout(() => {
            changeGPDOnline({
                currentAnswer: null
            });

            if (((selectedIndexes.length === letterPaths.length - 1) && isCorrect) || (!!mistakesPerAnswerQty && !isCorrect)) {
                changeGPDOnline({
                    correctAnswersQty: isCorrect ? correctAnswersQty + 1 : correctAnswersQty,
                });

                if (isCorrect) speakTexts({text: letter, type: 'letter'});

                setGameTimeout(() => {
                    if (iteration >= data.length - 1) {
                        initFinishPlaying();
                    } else {
                        changeGPDOnline({
                            iteration: iteration + 1,
                            selectedIndexes: [],
                            mistakesPerAnswerQty: 0
                        });
                    }
                }, isCorrect ? 1000 : 300);
            }
        }, 500);
    };

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}
            handleClick={handleClick}
        />
    );
};
