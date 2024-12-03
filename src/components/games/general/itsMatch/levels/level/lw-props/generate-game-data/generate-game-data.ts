import {generateVariantOptions} from './generate-variant-options';

import {GenerateGDCB} from '@custom-types';
import {GetWordsT} from '@lib/game/utils/get-words/types';
import {ItsMatchGameL1T, ItsMatch_GameData, WordItem, Variant} from '../../type';

export const generateGameData:GenerateGDCB<ItsMatchGameL1T> = async ({
    gameSettings,
    getWords
}):Promise<ItsMatch_GameData> => {
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

const getWordsArray = async (theme:ItsMatchGameL1T['gameSettings']['theme'], course:number, getWords:GetWordsT):Promise<WordItem[]> => {
    const fetchData = await getWords({
        theme: theme === 'random' ? '' : theme,
        wordsQty: 16,
        studyStage: course - 1 ? [course - 1, course] : [course]
    }).then(data => data.words);

    return fetchData
        .map(wordObj => {
            const {word, transcription, soundUrl} = wordObj;

            return {word, transcription, soundUrl};
        });
};