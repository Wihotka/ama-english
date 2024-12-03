import {generateLetters} from '../../levels/level1/utils';
import {words} from '../../words';

import {GenerateGDCB} from '@custom-types';
import {WordSaladGameT} from '../../type';

export const generateGameData:GenerateGDCB<WordSaladGameT> = async () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const letters = generateLetters();

    return {
        letters,
        alphabet,
        words,
    };
};
