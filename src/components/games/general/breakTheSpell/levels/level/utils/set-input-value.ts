import {dropRight, lowerCase} from 'lodash';

import {setInputValueT} from '../type';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

export const setInputValue:setInputValueT = (props):void => {
    const {
        code,
        words,
        typedWord,
        mistakeQty,
        missingLetters,
        changeGPDOnline,
        isInputFieldFull,
        currentWordIndex,
        isMissedFieldFull,
        setInputSelectionCB
    } = props;

    const compareWords = () => setInputSelectionCB(typedWord.join('').replace('-', ' ') === lowerCase(words[currentWordIndex].word) ? 'success' : 'error');

    const specialSymbols = ['-', ' '];

    if (code.includes('Key')) {
        const typedLetter = code.slice(-1).toLowerCase();
        const pattern = words[currentWordIndex].word;
        const isSpecialSymbol = specialSymbols.includes(pattern[typedWord.length])
            || specialSymbols.includes(pattern[typedWord.length]);
        const changedTypedLetter = isSpecialSymbol ? [pattern[typedWord.length], typedLetter] : [typedLetter];

        if (mistakeQty === 2)
            changeGPDOnline({
                pressedKey: !isMissedFieldFull ? typedLetter : '',
                missingLetters: !isMissedFieldFull ? [...missingLetters, typedLetter] : missingLetters
            });
        else
            changeGPDOnline({
                pressedKey: !isInputFieldFull ? typedLetter : '',
                typedWord: !isInputFieldFull ? [...typedWord, ...changedTypedLetter] : typedWord
            });
    } else if (code === 'Backspace') {
        if (mistakeQty === 2)
            changeGPDOnline({
                pressedKey: missingLetters.length !== 0 ? 'Backspace' : '',
                missingLetters: dropRight(missingLetters)
            });
        else
            changeGPDOnline({
                pressedKey: typedWord.length !== 0 ? 'Backspace' : '',
                typedWord: specialSymbols.includes(typedWord[typedWord.length - 2])
                    ? dropRight(dropRight(typedWord))
                    : dropRight(typedWord)
            });
    } else if (code === 'Enter') {
        isInputFieldFull && isMissedFieldFull ? compareWords() : null;
    }

    setGameTimeout(() => {changeGPDOnline({pressedKey: ''});}, 100);
};