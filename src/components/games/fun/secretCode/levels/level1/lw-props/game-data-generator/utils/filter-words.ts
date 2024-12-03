import {complexityResolver} from '../../../../../config';
import {WordItem} from '@lib/game/utils/get-words/types';
import {sampleSize, shuffle} from 'lodash';

type FilterWordsT = {
    wordsData:WordItem[];
    complexity:number;
    alphabet:{ letter:string; color:string }[];
    wordsQty?:number;
};

export const filterWords = ({
    wordsData,
    complexity,
    alphabet,
    wordsQty = 3,
}:FilterWordsT) => {
    const {min, max} = complexityResolver[complexity];
    const filteredWords = wordsData.filter(
        ({word}) =>
            !word.includes(' ') && word.length >= min && word.length <= max
    );
    const randomWords = sampleSize(shuffle(filteredWords), wordsQty);

    return randomWords.map(({word, soundUrl}) => {
        const lowerCaseWord = word.toLowerCase();

        const task = lowerCaseWord.split('').map((l) => {
            const index = alphabet.findIndex(({letter}) => letter === l);

            return {
                value: index,
                color: alphabet[index].color,
            };
        });

        return {word: lowerCaseWord, soundUrl, task};
    });
};
