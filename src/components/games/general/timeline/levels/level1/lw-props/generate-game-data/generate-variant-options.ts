import {shuffle, random} from 'lodash';
import {loadLocalGameData} from '@lib/game/utils';

import {TimelineLocalData} from '@lib/game/utils/game-local-data-loader/types';
import {RandomGeneratorVariantsT, Variant} from '../../type';

// Генерирует массив вариантов ответов
export const generateVariantOptions:RandomGeneratorVariantsT = async (params) => {
    const {level, theme, answersQty} = params;

    if (level === 1) {
        const data = (await loadLocalGameData(TimelineLocalData[theme]))['1'];

        const variants:Variant[] = [];

        for (let variant = 0; variant < answersQty; variant++) {
            const availableTenses = data
                .filter(tenses => !variants?.find(variant => tenses.sentence.includes(variant.correctAnswer)))
                .filter(tenses => !variants?.find(variant => tenses.sentence.includes(variant.mistakeAnswer)));

            const selectCorrectTenses = availableTenses[random(availableTenses.length - 1)];

            const correctAnswerText = selectCorrectTenses.sentence[random(selectCorrectTenses.sentence.length - 1)];

            const selectMistakeTensesArray = availableTenses.filter(tenses => !tenses.sentence.includes(correctAnswerText));

            const mistakeAnswer = selectMistakeTensesArray[random(selectMistakeTensesArray.length - 1)];

            const variant:Variant = {
                answers: shuffle([selectCorrectTenses.imagePath, mistakeAnswer.imagePath]),
                correctAnswer: selectCorrectTenses.imagePath,
                mistakeAnswer: mistakeAnswer.imagePath,
                question: selectCorrectTenses.sentence[random(selectCorrectTenses.sentence.length - 1)]
            };

            variants.push(variant);
        }

        return shuffle(variants);
    }

    if (level === 2) {
        const fetchTenses = (await loadLocalGameData(TimelineLocalData[theme]))['2'];

        const transformFetchTenses = fetchTenses.map(tenses => {
            const {correctVersion, incorrectVersion, imagePath} = tenses;

            return {
                answers: shuffle([correctVersion, incorrectVersion]),
                question: imagePath,
                correctAnswer: correctVersion,
                mistakeAnswer: incorrectVersion
            };
        });

        return shuffle(transformFetchTenses).slice(0, answersQty);
    }

    return [];
};
