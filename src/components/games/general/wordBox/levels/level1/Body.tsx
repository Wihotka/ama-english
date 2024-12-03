import React, {useEffect} from 'react';
import {isEqual, sample} from 'lodash';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {Content} from './content';
import {directionCondition} from './utils';

import {directionT, WordBoxT} from './type';

export const Body = (p:WordBoxT) => {
    const {game, changeGPDOnline, initFinishPlaying} = p;
    const {gamePlayData, gameData, gameSettings, gameConfig} = game;
    const {
        userAnswers, foundWords, currentDirection, selectedCells, wrongAnswersQty,
        additionalWords, hintIsActive
    } = gamePlayData;
    const {placedWords, directions, allWords} = gameData;
    const {imagesPaths} = gameConfig;
    const {complexity, wordsQty, level, theme} = gameSettings;

    useEffect(() => {
        if (!hintIsActive) {
            setGameTimeout(() => changeGPDOnline({
                hintIsActive: true
            }), 15000);
        }
    }, [hintIsActive]);

    const handleHint = () => {
        const randomWord = sample(placedWords.filter(({word}) => !foundWords.includes(word)));

        if (randomWord) changeGPDOnline({
            userAnswers: [randomWord.start],
            hintIsActive: false
        });
    };

    const checkAnswer = () => {
        const sortedAnswers = [...userAnswers].sort((a, b) =>
            ((a.row * 100 + a.col) > (b.row * 100 + b.col)) ? 1 : -1);

        const letters = sortedAnswers.map(({letter}) => letter);
        const cells = sortedAnswers.map(({row, col}) => ({row, col}));
        const currentWord = placedWords.find(({word}) => !foundWords.includes(word) &&
            (isEqual(letters, word.split('')) || isEqual(letters.reverse(), word.split(''))));
        const additionalWord = allWords.find(word => !additionalWords.includes(word) && !foundWords.includes(word) &&
            (isEqual(letters, word.split('')) || isEqual(letters.reverse(), word.split(''))));

        if (currentWord) {
            changeGPDOnline({
                answerStatus: 'correct'
            });

            setGameTimeout(() => {
                changeGPDOnline({
                    userAnswers: [],
                    foundWords: [...foundWords, currentWord?.word],
                    selectedCells: [...selectedCells, ...cells],
                    answerStatus: null
                });

                if (foundWords.length === wordsQty - 1) {
                    initFinishPlaying();
                }
            }, 1000);
        } else if (additionalWord) {
            changeGPDOnline({
                answerStatus: 'correct'
            });

            setGameTimeout(() => {
                changeGPDOnline({
                    userAnswers: [],
                    additionalWords: [...additionalWords, additionalWord],
                    selectedCells: [...selectedCells, ...cells],
                    answerStatus: null
                });
            }, 1000);
        } else {
            changeGPDOnline({
                answerStatus: 'wrong'
            });

            setGameTimeout(() => {
                if (wrongAnswersQty === 2) {
                    initFinishPlaying();
                } else {
                    changeGPDOnline({
                        wrongAnswersQty: wrongAnswersQty + 1,
                        userAnswers: [],
                        answerStatus: null
                    });
                }
            }, 1000);
        }
    };

    const handleClick = ({row, col, letter}:{ row:number, col:number, letter:string }) => {
        const currentAnswer = userAnswers.find((answer) => row === answer.row && col === answer.col);

        if (currentAnswer) {
            changeGPDOnline({
                userAnswers: userAnswers.filter(answer => answer !== currentAnswer)
            });
        } else {
            if (userAnswers.length === 0) {
                changeGPDOnline({
                    userAnswers: [...userAnswers, {row, col, letter}]
                });
            } else if (userAnswers.length === 1) {
                const {row: selectedRow, col: selectedCol} = userAnswers[0];
                const availableDirections:Array<directionT> = (['vertical', 'horizontal', 'diagonalToRight', 'diagonalToLeft'] as Array<directionT>)
                    .filter(direction => directions.includes(direction));

                availableDirections.forEach(direction => {
                    if (directionCondition({direction, selectedCol, selectedRow, col, row})) {
                        changeGPDOnline({
                            userAnswers: [...userAnswers, {row, col, letter}],
                            currentDirection: direction
                        });
                    }
                });
            } else {
                const match = userAnswers.find(({row: selectedRow, col: selectedCol}) =>
                    directionCondition({direction: currentDirection, selectedCol, selectedRow, col, row}));

                if (match) {
                    changeGPDOnline({
                        userAnswers: [...userAnswers, {row, col, letter}],
                    });
                }
            }
        }
    };

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}
            complexity={complexity}
            level={level}
            theme={theme}
            wordsQty={wordsQty}
            imagesPaths={imagesPaths}
            handleClick={handleClick}
            checkAnswer={checkAnswer}
            handleHint={handleHint}
        />
    );
};
