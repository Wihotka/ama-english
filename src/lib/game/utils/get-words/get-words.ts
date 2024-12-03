import {shuffle} from 'lodash';
import {difficultSounds, disabledSoundsWithDividedWords} from '@lib/game/static-data';

import {isolatedData, homonyms} from './words-for-isaolated-mode';
import {GetWordsT, GetWordsBackEnd, GetWordsP, WordItem} from './types';
import {getWordsFromApi} from '@lib/game/utils/get-words/getWordsFromApi';

export const getWords:GetWordsT = (p) => new Promise((res:(data:any) => void) => {
    getWordsFromApi(p).then((words) => {
        const transformedWords = transformWordsFromApi(words);

        res({words: transformedWords});
    });
});

const transformWordsFromApi = (words:Array<WordItem>) => words.map((wordItem) => {

    const newWordItem = {
        ...wordItem,
        transcription: `[${wordItem.transcription}]`
    };

    // @ts-ignore такая фигня потому что с серва поменялись типы, а в играх менять пока нету времени
    if (wordItem.imageUrl) {
        // @ts-ignore
        newWordItem.imageUrls = [wordItem.imageUrl];
    }

    return newWordItem;
});

export const getWordsBackEnd:GetWordsBackEnd<GetWordsP> = (p) => {
    const {
        hasImg,
        wordsQty,
        theme = '',
        description,
        isDividedWord,
        studyStage = [],
        disabledThemes = [],
        isNotEqualWroteWords,
        isNeedDisabledSounds,
        transcriptionDifficulty = 'random'
    } = p;

    const filteredByStudyStage = studyStage.length > 0
        ? isolatedData.filter((word) => studyStage.includes(word.studyStage))
        : [...isolatedData];

    const filteredByIdenticalWords = isNotEqualWroteWords
        ? filteredByStudyStage.filter((word) => !homonyms.includes(word.word))
        : [...filteredByStudyStage];

    const filterByDisabledThemes = disabledThemes.length > 0
        ? filteredByIdenticalWords.filter(word => !disabledThemes.includes(word.theme))
        : [...filteredByIdenticalWords];

    const filteredByTheme = theme
        ? filterByDisabledThemes.filter((word) => word.theme === theme)
        : [...filterByDisabledThemes];

    const filteredByHasImg = hasImg
        ? filteredByTheme.filter((word) => word.imageUrls)
        : [...filteredByTheme];

    const filteredByDescription = description
        ? filteredByHasImg.filter((word) => word.description !== undefined && word.description[description] !== undefined)
        //todo вот ця строка вертає саме ту description яка прийшла
        // .map((word) => ({
        //     ...word,
        //     description: word.description?.[description]
        // }))
        : [...filteredByHasImg];

    const filteredByIsDividedWord = isDividedWord
        ? isNeedDisabledSounds
            ? [...filteredByDescription]
            : filteredByDescription.filter((word) =>
                // todo поставил проверку на dividedTranscription, т.к. мы у типа WordItem dividedTranscription сделали опциональным
                // сделаешь уже как надо правильно
                Array.isArray(word.dividedWord) && !word.dividedTranscription?.some((sound:string) =>
                    disabledSoundsWithDividedWords.includes(sound)))
        : [...filteredByDescription];

    let filteredByTranscriptionDifficult;

    if (transcriptionDifficulty === 'random') {
        filteredByTranscriptionDifficult = [...filteredByIsDividedWord];
    } else {
        const isNeedHard = transcriptionDifficulty === 'hard';

        filteredByTranscriptionDifficult = filteredByIsDividedWord.filter((word) => {
            if (isNeedHard) {
                // todo поставил проверку на dividedTranscription, т.к. мы у типа WordItem dividedTranscription сделали опциональным
                // сделаешь уже как надо правильно
                return word.dividedTranscription?.some((sound:string) => difficultSounds.includes(sound));
            }
            // todo поставил проверку на dividedTranscription, т.к. мы у типа WordItem dividedTranscription сделали опциональным
            // сделаешь уже как надо правильно

            return word.dividedTranscription?.every((sound:string) => !difficultSounds.includes(sound));
        });
    }

    const mixedData = shuffle(filteredByTranscriptionDifficult);

    return mixedData.splice(0, wordsQty);
};

// console.log(getWordsBackEnd({wordsQty: 10}));
// console.log(getWordsBackEnd({wordsQty: 10}));
// console.log(getWordsBackEnd({wordsQty: 10}));
// console.log(getWordsBackEnd({wordsQty: 10}));
// //
//
// console.log('____________________');
// console.log(getWordsBackEnd({studyStage: [1], wordsQty: 5}));
// console.log(getWordsBackEnd({studyStage: [1], wordsQty: 5}));
// console.log(getWordsBackEnd({studyStage: [2, 3], wordsQty: 5}));
//
// console.log('________isDividedWord____________');
// console.log(getWordsBackEnd({studyStage: [1], wordsQty: 5, isDividedWord: true}));
// console.log(getWordsBackEnd({studyStage: [1], wordsQty: 5, isDividedWord: true}));
// console.log(getWordsBackEnd({studyStage: [2, 3], wordsQty: 5, isDividedWord: true}));
//
// console.log('________isDividedWord + theme____________');
// console.log(getWordsBackEnd({studyStage: [1], wordsQty: 5, isDividedWord: true, theme: 'coloursShapes'}));
// console.log(getWordsBackEnd({studyStage: [1], wordsQty: 5, isDividedWord: true, theme: 'familyHome'}));
// console.log(getWordsBackEnd({studyStage: [2, 3], wordsQty: 5, isDividedWord: true, theme: 'toysHobbies'}));
// console.log('________transcriptionDifficult____________');
// console.log(getWordsBackEnd({wordsQty: 5, isDividedWord: true, transcriptionDifficulty: 'simple'}));
// console.log(getWordsBackEnd({wordsQty: 5, isDividedWord: true, transcriptionDifficulty: 'hard'}));
// console.log(getWordsBackEnd({wordsQty: 5, isDividedWord: true, transcriptionDifficulty: 'random'}));

// const data = getWordsBackEnd({studyStage: [1], wordsQty: 5, isDividedWord: true});
//
// data.forEach((wordObj) => {
//     wordObj.dividedWord.forEach(word => console.log(word));
// });
//
// const data2 = getWordsBackEnd({studyStage: [1], wordsQty: 5});
//
// data2.forEach((wordObj) => {
//     console.log(wordObj.imageUrls.toUpperCase());
//     wordObj.dividedWord?.forEach(word => console.log(word));
//     wordObj.dividedWord.forEach(word => console.log(word));
//
// });
// const data3 = getWordsBackEnd({studyStage: [1], wordsQty: 5, hasImg: true});

// data3.forEach((wordObj) => {
//     console.log(wordObj.imageUrls.toUpperCase());
//     wordObj.dividedWord?.forEach(word => console.log(word));
//     wordObj.dividedWord.forEach(word => console.log(word));
//
// });

// console.log(getWordsBackEnd({studyStage: [1, 3], wordsQty: 5, description: 1}));
// console.log(getWordsBackEnd({studyStage: [1, 3], wordsQty: 5, description: 2}));
//
// const ttt = getWordsBackEnd({studyStage: [1, 3], wordsQty: 5, description: 1});
// const ttt2 = getWordsBackEnd({studyStage: [1, 3], wordsQty: 5, description: 2});
//
// ttt.forEach((word) => {
//     word.description;
// });