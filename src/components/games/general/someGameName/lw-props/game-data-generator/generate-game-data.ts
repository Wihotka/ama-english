import {GenerateGDCB} from '@custom-types';
import {SomeGameNameGameT} from '../../type';

export const generateGameData:GenerateGDCB<SomeGameNameGameT> = async ({gameConfig, langCode, getWords, preloadSounds}) => {
    console.log('gp', gameConfig, langCode);

    const {words} = await getWords({wordsQty: 10});

    console.log('words', words);
    preloadSounds([{text: 'a', type: 'letter'}, {text: 'b', type: 'letter'}]);

    return {
        clicksQty: Math.floor(Math.random() * 10),
        answersQty: Math.floor(Math.random() * 10) + 10
    };
};