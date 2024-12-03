import {GenerateGDCB, StaticEngData} from '@custom-types';
import {GetWordsT} from '@lib/game/utils/get-words/types';

import {generateVariantOptions} from './generate-variant-options';

import {GuessTheSoundGameL1T, Variant, WordItem} from '../../type';

export const generateGameData:GenerateGDCB<GuessTheSoundGameL1T> = async ({
    gameConfig,
    gameSettings,
    staticEngData,
    getWords,
    preloadSounds
}) => {
    const {studyStage} = gameConfig;
    const {complexity, answersQty, level, course} = gameSettings;

    const wordsArray:WordItem[] = await getWordsArray(complexity, course, getWords);

    const transcriptionArray = getTranscriptionArray(complexity, staticEngData, wordsArray);

    const preloadSoundsArray = transcriptionArray.map(transcription => ({text: transcription}));
    
    preloadSounds(preloadSoundsArray);

    const arrayOptions:Variant[][] = [];

    for (let i = 0; i < answersQty; i++) {
        if (i === 0) {
            arrayOptions.push(generateVariantOptions({transcriptionArray, wordsArray}));
        } else {
            arrayOptions.push(generateVariantOptions({
                prevOptions: arrayOptions[i - 1],
                transcriptionArray,
                wordsArray
            }));
        }
    }

    return {
        answersQty,
        level,

        arrayOptions,
        studyStage
    };
};

const getWordsArray = async (complexity:number, course:number, getWords:GetWordsT):Promise<WordItem[]> => {

    const transcriptionType = () => {
        if (complexity === 1) return 'simple';

        if (complexity === 2) return 'hard';

        return 'random';
    };

    const fetchData = await getWords({
        wordsQty: 20,
        transcriptionDifficulty: transcriptionType(),
        isDividedWord: true,
        isNeedDisabledSounds: true,
        studyStage: course - 1 ? [course - 1, course] : [course]
    }).then(data => data.words);
    
    return fetchData
        // .filter(wordObj => wordObj.dividedWord !== undefined && wordObj.dividedWord.length > 0)
        // .filter(wordObj => wordObj.dividedTranscription !== undefined && wordObj.dividedTranscription.length > 0)
        .map(wordObj => {
            const {dividedWord, dividedTranscription, word} = wordObj;

            return {dividedWord, dividedTranscription, word};
        });
};

const getTranscriptionArray = (complexity:number, staticEngData:StaticEngData, wordArray:WordItem[]) => {
    const {easySounds, difficultSounds} = staticEngData;

    if (complexity === 1) return [...easySounds
        .filter(transcription => wordArray
            .find(wordObj => wordObj.dividedTranscription
                .includes(transcription)))];

    if (complexity === 2) return [...difficultSounds
        .filter(transcription => wordArray
            .find(wordObj => wordObj.dividedTranscription
                .includes(transcription)))];

    return [
        ...easySounds.filter(transcription => wordArray
            .find(wordObj => wordObj.dividedTranscription
                .includes(transcription))),
        ...difficultSounds.filter(transcription => wordArray
            .find(wordObj => wordObj.dividedTranscription
                .includes(transcription)))];
};