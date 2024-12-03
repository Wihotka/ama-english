import {random, shuffle} from 'lodash';
import {loadLocalGameData} from '@lib/game/utils';

import {
    FruitSmoothieLocalData,
    FruitSmoothieNumber,
    FruitSmoothiePronouns,
    FruitSmoothieTobe,
    FruitSmoothieVerbForm
} from '@lib/game/utils/game-local-data-loader/types';
import {ThemeFruitSmoothie} from '@custom-types';
import {FetchDataItem, FetchDataT, TypeTextInQuestion} from './../../type';

export const fetchData:FetchDataT = async (params) => {
    const {theme, answersQty, complexity} = params;

    const fetchData = await loadLocalGameData(FruitSmoothieLocalData[theme]);

    const result:FetchDataItem[] = [];

    if (theme === ThemeFruitSmoothie.toBe || theme === ThemeFruitSmoothie.pronouns) {
        const data = shuffle(fetchData) as FruitSmoothieTobe[] | FruitSmoothiePronouns[];

        for (let i = 0; i < answersQty; i++) {
            const {question, correctAnswer, incorrectAnswers, endOfQuestion} = data[i];

            result.push({
                question: question.replace(TypeTextInQuestion.endOfQuestion, endOfQuestion[random(endOfQuestion.length - 1)]),
                correct: correctAnswer,
                incorrectAnswers
            });
        }
    }

    if (theme === ThemeFruitSmoothie.verbForms) {
        const data = fetchData as FruitSmoothieVerbForm;

        const selectData = complexity === 3
            ? shuffle([...data['1'], ...data['2']])
            : complexity === 1 ? shuffle(data['1']) : shuffle(data['2']);

        for (let i = 0; i < answersQty; i++) {
            const {question, correctAnswer, incorrectAnswers} = selectData[i];

            result.push({
                question: Array.isArray(question) ? question[random(question.length - 1)] : question,
                correct: correctAnswer,
                incorrectAnswers
            });
        }
    }

    if (
        theme === ThemeFruitSmoothie.number
        || theme === ThemeFruitSmoothie.countableUncountable
        || theme === ThemeFruitSmoothie.muchMany
        || theme === ThemeFruitSmoothie.regularIrregularVerbs
        || theme === ThemeFruitSmoothie.timeMarkersPresent
    ) {
        const data = shuffle(fetchData) as FruitSmoothieNumber[];

        for (let i = 0; i < answersQty; i++) {
            const {question, correctAnswer, incorrectAnswers} = data[i];

            result.push({
                question: question,
                correct: correctAnswer,
                incorrectAnswers
            });
        }
    }

    return result;
};