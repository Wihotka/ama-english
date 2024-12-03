import {GenerateGDCB} from '@custom-types';
import {GetWordsT} from '@lib/game/utils/get-words/types';
// import {range} from 'lodash';

import {PerfectPairs_GameData, PerfectPairsL1T, Variant, WordItem} from '../../type';

import {generateVariantOptions} from './generate-variant-options';

export const generateGameData:GenerateGDCB<PerfectPairsL1T> = async ({gameSettings, getWords}):Promise<PerfectPairs_GameData> => {
    const {answersQty, level, theme, course} = gameSettings;

    const wordsArray = await getWordsArray(theme, course, getWords);

    const arrayOptions:Variant[][] = [];

    for (let answer = 0; answer < answersQty; answer++) {
        if (answer === 0) {
            arrayOptions.push(generateVariantOptions({wordsArray}));
        } else {
            arrayOptions.push(generateVariantOptions({prevOptions: arrayOptions[answer - 1], wordsArray}));
        }
    }

    return {
        answersQty,
        level,
        arrayOptions
    };
};

const getWordsArray = async (theme:PerfectPairsL1T['gameSettings']['theme'], course:number, getWords:GetWordsT):Promise<WordItem[]> => {

    const fetchData = await getWords({
        theme: theme === 'random' ? '' : theme,
        wordsQty: 16,
        hasImg: true,
        studyStage: course - 1 ? [course - 1, course] : [course]
    }).then(data => data.words);

    return fetchData
        .map(wordObj => {
            const {word, transcription, imageUrls, soundUrl} = wordObj;

            return {word, transcription, imageUrls, soundUrl};
        });
};