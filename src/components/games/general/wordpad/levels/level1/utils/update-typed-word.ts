import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {updateTypedWordT} from '../type';

export const updateTypedWord:updateTypedWordT = (props) => {
    const {words, currentWordIndex, typedWord, changeGPDOnline} = props;
    const pattern = words[currentWordIndex].word;
    const partialWord = typedWord.map((letter, index) => letter !== pattern[index] ? '  ' : pattern[index]);
    const emptyPartIndexes:Array<number> = [];

    for (let i = 0; i < partialWord.length; i++) partialWord[i] === '  ' ? emptyPartIndexes.push(i) : null;

    setGameTimeout(() => changeGPDOnline({typedWord: partialWord, emptyPartIndexes}), 500);
};