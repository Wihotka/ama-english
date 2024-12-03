import {GenerateAGD} from '@custom-types';
import {LetterChainGameT} from '../type';
import {words} from '../words';
import {generateLetters} from '../utils';

export const generateGD:GenerateAGD<LetterChainGameT> = async () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const letters = generateLetters();

    return {
        alphabet,
        letters,
        words
    };
};
