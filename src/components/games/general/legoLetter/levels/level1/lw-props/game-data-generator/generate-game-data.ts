import {shuffle, sampleSize} from 'lodash';

import {lowercase, uppercase} from '../../../../letters';

import {GenerateGDCB} from '@custom-types';
import {LegoLetterGameL1T} from '../../type';

export const generateGameData:GenerateGDCB<LegoLetterGameL1T> = async ({gameSettings}) => {
    const {answersQty, letters} = gameSettings;

    const letterTypeResolver:{ [key:string]:boolean } = {
        'capital': true,
        'small': false,
        'random': Math.random() < 0.5
    };

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const data = [];

    while (data.length < answersQty) {
        const letterIsCapital = letterTypeResolver[letters];
        const letter = shuffle(alphabet)[0];
        const {letterParts, wrongParts, letterPaths, height} = letterIsCapital
            ? uppercase[letter.toUpperCase()]
            : lowercase[letter];
        const wrongPartsQty = Math.round(letterParts.length / 100 * 60);
        const wrongPartsMaxQty = 6 - letterParts.length;
        const wrongPartsQtyFinal = wrongPartsQty > wrongPartsMaxQty ? wrongPartsMaxQty : wrongPartsQty;

        data.push({
            letterPaths,
            height,
            parts: shuffle([
                ...letterParts.map((part:string, index:number) => ({part, index})),
                ...sampleSize(wrongParts, wrongPartsQtyFinal).map(part => ({
                    part, index: null
                }))
            ]),
            letter
        });
    }

    return {data};
};
