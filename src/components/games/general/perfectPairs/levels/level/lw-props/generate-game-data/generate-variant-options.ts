import {shuffle, random} from 'lodash';
import {RandomGeneratorVariantsT, Variant} from '../../type';

// Генерирует массив вариантов ответов
export const generateVariantOptions:RandomGeneratorVariantsT = (params) => {
    const {wordsArray, prevOptions} = params;
    const optionsQty = 2 as const;

    const availableWords = wordsArray.filter(wordObj => !prevOptions?.find(option => option.word === wordObj.word));

    const arrayOptions:Variant[] = [];

    for (let options = 0; options < optionsQty; options++) {
        const availableVariants = availableWords.filter(wordObj => !arrayOptions?.find(option => option.word === wordObj.word));

        const selectWord = availableVariants[random(availableVariants.length - 1)];

        const newVariant:Variant = {
            word: selectWord.word,
            transcription: selectWord.transcription,
            imageUrls: selectWord.imageUrls,
            isCorrect: false,
            soundUrl: selectWord.soundUrl
        };

        if (options === 0) {
            newVariant.isCorrect = true;

        }

        arrayOptions.push(newVariant);
    }

    // Перемешиваем массив
    return shuffle(arrayOptions);
};
