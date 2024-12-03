import {useEffect, useRef} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {updateCurrentFieldForNextWord} from '../utils';
import {generateMixedPuzzleArray} from '../utils';
import {generateNormalPuzzleArray} from '../utils';

import {useCurrentStateP} from '../type';

export const useCurrentState = ({game, changeGPDOnline, initFinishPlaying}:useCurrentStateP):void => {
    const {gamePlayData, gameData, gameConfig} = game;
    const {levelConfigs} = gameConfig;
    const {words, level, alphabet} = gameData;
    const {
        currentWordIndex,
        pseudoCurrentWordArray,
        mistakeQty,
        isHintButtonPressed,
        isPuzzlePressed
    } = gamePlayData;

    // true flag of the first rendering
    const firstUpdate = useRef(true);
    const arrayLongerBy = levelConfigs?.[level].mixedPuzzleArrayLongerByFL;

    // checking puzzles pressing -> return prev state for ERROR puzzle
    useEffect(() => {
        if (!firstUpdate.current) {
            setGameTimeout(() => {
                const nextSymbol = words[currentWordIndex].word[pseudoCurrentWordArray.length];
                const isNextSymbolSpaceOrDash = nextSymbol === ' ' || nextSymbol === '-';

                changeGPDOnline({
                    pressedPuzzleIndexes: [],
                    errorPuzzleIndexes: [],
                    isCandidateFieldActive: false,
                    pseudoCurrentWordArray:
                        isNextSymbolSpaceOrDash
                            ? [...pseudoCurrentWordArray, 'notLetter']
                            : pseudoCurrentWordArray
                });
            }, 600);
        }
    }, [isPuzzlePressed]);

    // checking the change of the current puzzles -> generate puzzle arrays
    useEffect(() => {
        if (!firstUpdate.current) {
            changeGPDOnline({
                mixedPuzzlesArray: generateMixedPuzzleArray(words[currentWordIndex].word, arrayLongerBy, alphabet),
                normalPuzzlesArray: generateNormalPuzzleArray(words[currentWordIndex].word),
                isCandidateFieldActive: false,
            });
        }
    }, [currentWordIndex]);

    // checking pseudo current puzzles array's length -> is full -> do update field
    useEffect(() => {
        if (!firstUpdate.current) {
            const pseudoLength = pseudoCurrentWordArray.length;
            const realLength = words[currentWordIndex].word.length;

            const isUpdateWithHint = isHintButtonPressed && pseudoLength === realLength - 1;
            const isUpdateWithoutHint = !isHintButtonPressed && pseudoLength === realLength;

            // eslint-disable-next-line max-len
            (isUpdateWithHint || isUpdateWithoutHint) &&
                updateCurrentFieldForNextWord({
                    result: true,
                    gamePlayData,
                    gameData,
                    initFinishPlaying,
                    changeGPDOnline
                });
        }
    }, [pseudoCurrentWordArray]);

    // checking mistake quantity -> more than 2 quantity -> update field
    useEffect(() => {
        if (!firstUpdate.current) {
            mistakeQty === 2
                ? updateCurrentFieldForNextWord({
                    result: false,
                    gamePlayData,
                    gameData,
                    initFinishPlaying,
                    changeGPDOnline
                }) : '';
        } else {
            firstUpdate.current = false; // useEffects events ON
        }
    }, [mistakeQty]);
};