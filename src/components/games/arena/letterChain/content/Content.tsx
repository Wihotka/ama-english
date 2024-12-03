import React, {useState, useEffect} from 'react';
import {shuffle} from 'lodash';
import {
    clearAllGameTimeoutInterval,
    clearGameTimeoutInterval,
    setGameInterval,
    setGameTimeout
} from 'amakids-games-utils-and-generations/lib/utils';

import {generateLetters} from '../utils';
import {Input, Letters} from './parts';
import {LetterChainT} from '../type';
import {LetterChainGD, LetterChainGPD} from '../init/type';
import styles from './styles.scss';

export const Content = (p:LetterChainT) => {
    const {game, changeGPDOnline, changeGPD, initFinishPlaying} = p;
    const {gameData, gamePlayData, gameConfig, isOnline} = game;
    const {alphabet, words}:LetterChainGD = gameData.game;
    const {stepBy, inputIndexes, selectedWords, letters, answerStatus, score}:LetterChainGPD = gamePlayData;

    const [botStep, setBotStep] = useState<number>(0);

    useEffect(() => {
        const {letters} = gameData.game;

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

        // Online mode
        let botInterval:any;

        function init() {
            const myFunction = function() {
                doSomething();
                const rand = Math.round(Math.random() * (8000 - 500)) + 10000;

                botInterval = setTimeout(myFunction, rand);
            };

            myFunction();
        }

        function doSomething() {
            setBotStep(prev => prev += 1);
        }

        init();

        return () => {
            clearTimeout(interval);
        };
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
                ? [...selectedWords, {word: inputValue, player: stepBy}]
                : selectedWords,
            answerStatus: isCorrect ? 'correct' : 'wrong',
            score: {
                ...gamePlayData.score,
                [stepBy]: isCorrect ? gamePlayData.score[stepBy] + 2 : gamePlayData.score[stepBy],
            }
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

    useEffect(() => {
        handleClear();
    }, [stepBy]);

    useEffect(() => {
        if (isOnline && botStep > 1) changeGPDOnline({
            score: {...score, [gameData.players.player2.name]: score[gameData.players.player2.name] + 2}
        });
    }, [botStep]);

    return (
        <div className={styles.gameContent}>
            <Input
                gamePlayData={gamePlayData}
                handleClear={handleClear}
                handleRenew={handleRenew}
            />
            <Letters
                gamePlayData={gamePlayData}
                handleInput={handleInput}
                handleEnter={handleEnter}
            />
        </div>
    );
};