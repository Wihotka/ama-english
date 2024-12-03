import {useEffect, useRef} from 'react';
import {dropRight, lowerCase} from 'lodash';

import {selections, useInputT} from '../type';

export const useInput:useInputT = (props) => {
    const {
        words,
        timer,
        typedWord,
        pressedKey,
        isKeyPressed,
        selectionType,
        changeGPDOnline,
        currentWordIndex,
        currentLetterIndex,
        setInputSelectionCB
    } = props;
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (!firstUpdate.current) {
            const pattern = lowerCase(words[currentWordIndex].word);
            const isSpecialSymbol = pattern[currentLetterIndex] === '-' || pattern[currentLetterIndex] === ' ';
            const isCorrectLetter = isSpecialSymbol
                ? pressedKey === pattern[currentLetterIndex + 1]
                : pressedKey === pattern[currentLetterIndex];
            const typedLetter = isSpecialSymbol ? [pattern[currentLetterIndex], pressedKey] : [pressedKey];

            if (isCorrectLetter) {
                let currentWord = '';

                if (selectionType === selections.error) {
                    changeGPDOnline({
                        typedWord: isSpecialSymbol
                            ? [...dropRight(dropRight(typedWord)), ...typedLetter]
                            : [...dropRight(typedWord), ...typedLetter]
                    });
                    currentWord = dropRight(typedWord).concat(...typedLetter).join('');
                } else {
                    changeGPDOnline({typedWord: [...typedWord, ...typedLetter]});
                    currentWord = typedWord.concat(...typedLetter).join('');
                }

                changeGPDOnline({
                    currentLetterIndex: isSpecialSymbol ? currentLetterIndex + 2 : currentLetterIndex + 1,
                    removedKeys: [],
                    timeForRemoveKey: timer - 50
                });

                setInputSelectionCB(pattern === currentWord ? selections.success : selections.none);
            } else {
                selectionType === selections.error
                    ? changeGPDOnline({typedWord: [...dropRight(typedWord), pressedKey]})
                    : changeGPDOnline({typedWord: [...typedWord, ...typedLetter]});

                setInputSelectionCB(selections.error);
            }
        } else {
            firstUpdate.current = false;
        }
    }, [isKeyPressed]);
};