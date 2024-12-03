import React, {useEffect} from 'react';
import {shuffle} from 'lodash-es';

import {
    clearAllGameTimeoutInterval,
    clearGameTimeoutInterval,
    setGameInterval,
    setGameTimeout
} from 'amakids-games-utils-and-generations/lib/utils';

import {
    generateLetters
} from './utils';
import {Content} from './content';

import {WordSaladT} from '../../type';

export const Body = (p:WordSaladT) => {
    const {changeGPDOnline, game, changeGPD} = p;
    const {gamePlayData, gameData, gameConfig} = game;
    const {imagesPaths} = gameConfig;
    const {alphabet} = gameData;
    const {words} = gameData;
    const {inputIndexes, selectedWords, letters, answerStatus} = gamePlayData;

    useEffect(() => {
        const {letters} = gameData;

        let i = 0;
        const interval = setGameInterval(() => {
            if (i === 10) {
                changeGPD({
                    letters,
                    gameIsActive: true
                });
                clearGameTimeoutInterval(interval);
            } else {
                changeGPD({
                    letters: shuffle(alphabet).slice(0, 16)
                });
                i++;
            }
        }, 100);
    }, []);

    const handleInput = (index:number) => {
        if (answerStatus === null) {
            changeGPDOnline({
                inputIndexes: inputIndexes.includes(index)
                    ? inputIndexes.filter(i => i !== index)
                    : inputIndexes.length < 11
                        ? [...inputIndexes, index]
                        : inputIndexes
            });
        } else {
            changeGPDOnline({
                inputIndexes: [index],
                answerStatus: null
            });
            clearAllGameTimeoutInterval();
        }
    };

    const handleClear = () => changeGPDOnline({
        inputIndexes: []
    });

    const handleEnter = () => {
        const inputValue = inputIndexes.map(i => letters[i]).join('');
        const isCorrect = (words.includes(inputValue.toLowerCase())) &&
            (!selectedWords.find(({word}) => word === inputValue));

        changeGPDOnline({
            selectedWords: isCorrect
                ? [...selectedWords, {word: inputValue, scores: inputValue.length - 2}]
                : selectedWords,
            answerStatus: isCorrect ? 'correct' : 'wrong'
        });

        setGameTimeout(() => {
            changeGPDOnline({
                inputIndexes: [],
                answerStatus: null
            });
        }, 1000);
    };

    const handleRenew = () => changeGPDOnline({
        letters: generateLetters(),
        inputIndexes: []
    });

    return (
        <Content
            imagesPaths={imagesPaths ? imagesPaths : null}
            gamePlayData={gamePlayData}
            handleInput={handleInput}
            handleClear={handleClear}
            handleEnter={handleEnter}
            handleRenew={handleRenew}
        />
    );
};
