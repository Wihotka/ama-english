import {shuffle, random} from 'lodash';

import {RandomGeneratorVariantsT, SelectedIndexSoundInWordT, Variant, WordItem} from '../../type';

type SelectWord = (wordArray:WordItem[], transcriptionArray:string[], answerOptions:Variant[])
    => { selectedWord:WordItem, selectTranscription:string };

// Выбор слова и транскрипции
const onSelectWord:SelectWord = (wordArray, transcriptionArray, answerOptions) => {
    const words = wordArray;
    const selectedTranscription:string = transcriptionArray[random(transcriptionArray.length - 1)];

    const variantsWordsArray = words.filter(wordObj => wordObj.dividedTranscription.includes(selectedTranscription))
        .filter(wordObj => !answerOptions
            ?.find(option => option.word === wordObj.word));

    if (variantsWordsArray.length === 0) return onSelectWord(wordArray, transcriptionArray, answerOptions);

    const selectedWord:WordItem = variantsWordsArray[random(variantsWordsArray.length - 1)];

    return {selectedWord, selectTranscription: selectedTranscription};
};

const selectedIndexSoundInWord:SelectedIndexSoundInWordT = (params) => {
    const {wordObj, transcription} = params;

    const indexArray:number[] = wordObj.dividedTranscription
        .map((item:string, index) => item === transcription ? index : -1)
        .filter(element => element >= 0);

    return indexArray[random(indexArray.length - 1)];
};

// Генерирует массив вариантов ответов
export const generateVariantOptions:RandomGeneratorVariantsT = (params) => {
    const {wordsArray, prevOptions, transcriptionArray} = params;
    const optionsQty = 4 as const;

    // Массив вариантов
    const answerOptions:Variant[] = [];

    // Массив с доступными звуками
    let variantsTranscription:string[] = transcriptionArray
        .filter(transcription => !prevOptions
            ?.find(option => option.selectedTranscription === transcription));

    for (let option = 0; option < optionsQty; option++) {
        //Удаляет уже используемые транскрипции
        variantsTranscription = variantsTranscription.filter(transcription => !answerOptions
            ?.find(option => option.selectedTranscription === transcription));

        const {selectedWord, selectTranscription} = onSelectWord(wordsArray, variantsTranscription, answerOptions);

        const indexTranscription = selectedIndexSoundInWord({transcription: selectTranscription, wordObj: selectedWord});

        const newVariant:Variant = {
            word: selectedWord.word,
            dividedWord: selectedWord.dividedWord,
            dividedTranscription: selectedWord.dividedTranscription,
            selectedTranscription: selectTranscription,
            isCorrect: false,
            indexSelectedTranscription: indexTranscription
        };

        if (option === 0) {
            newVariant.isCorrect = true;
        }

        answerOptions.push(newVariant);

    }

    return shuffle(answerOptions);
};
