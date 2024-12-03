import {sample, shuffle} from 'lodash';

import {prepareAlphabet} from '../../../../utils';

import {GenerateGDCB} from '@custom-types';
import {AlphabetGameL3T} from '../../type';

export const generateGameData:GenerateGDCB<AlphabetGameL3T> = async ({gameSettings}) => {
    const {letters, lettersQty} = gameSettings;

    const alphabet = prepareAlphabet(letters);
    const inaccessibleIndexes:Array<number> = [];
    const data = [];

    while (data.length < 3) {
        const availableIndexes = new Array(alphabet.length - lettersQty + 1).fill('')
            .map((str, index) => index).filter(index => !inaccessibleIndexes.includes(index));
        const startIndex = sample(availableIndexes) as number;

        data.push(shuffle(alphabet.slice(startIndex, startIndex + lettersQty).map((letter, index) => ({
            letter,
            index
        }))));
        inaccessibleIndexes.push(startIndex, startIndex + 1, startIndex + 2, startIndex - 1, startIndex - 2);
    }

    return {
        data
    };
};
