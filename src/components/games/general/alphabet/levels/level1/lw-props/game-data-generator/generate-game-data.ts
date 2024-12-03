import {shuffle} from 'lodash';

import {prepareAlphabet} from '../../../../utils';

import {GenerateGDCB} from '@custom-types';
import {AlphabetGameL1T} from '../../type';

export const generateGameData:GenerateGDCB<AlphabetGameL1T> = async ({gameSettings}) => {
    const {letters} = gameSettings;

    const alphabet = prepareAlphabet(letters);

    const imgIndexes = shuffle(alphabet.map((letter, index) => index));

    return {
        data: shuffle(alphabet.map((letter, index) => ({letter, index, imgIndex: imgIndexes[index]}))),
        alphabet
    };
};
