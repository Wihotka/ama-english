import {colors} from '../../../../../config';
import {sample} from 'lodash';

export const getAlphabet = () => {
    const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return alphabetLetters.map((l) => ({
        letter: l,
        color: sample(colors) || '#00E2D7',
    }));
};
