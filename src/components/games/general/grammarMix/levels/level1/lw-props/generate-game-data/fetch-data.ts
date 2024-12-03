import {random, shuffle} from 'lodash';
import {loadLocalGameData} from '@lib/game/utils';

import {ThemeGrammarMix} from '@custom-types';
import {GrammarMixLocalData} from '@lib/game/utils/game-local-data-loader/types';
import {FetchDataT, TypeLetter} from './../../type';

export const fetchData:FetchDataT = async (params) => {
    const {theme, answersQty} = params;
    const variants = [];

    if (theme === ThemeGrammarMix.pronouns || theme === ThemeGrammarMix.numerals) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        const data = fetchData['1'];

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, incorrectAnswers, endOfQuestion} = data[random(data.length - 1)];
            const updateQuestion = question.replace(TypeLetter.endOfQuestion, endOfQuestion[random(endOfQuestion.length - 1)]);

            variants.push({
                question: updateQuestion,
                correctAnswer: correctAnswer,
                variantsAnswer: shuffle([correctAnswer, incorrectAnswers[random(incorrectAnswers.length - 1)]])
            });
        }
    }

    if (theme === ThemeGrammarMix.number) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, incorrectAnswers} = fetchData[random(fetchData.length - 1)];

            variants.push({
                question,
                correctAnswer: correctAnswer,
                variantsAnswer: shuffle([correctAnswer, incorrectAnswers[random(incorrectAnswers.length - 1)]])
            });
        }
    }

    if (theme === ThemeGrammarMix.determiners) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, incorrectAnswers} = fetchData[random(fetchData.length - 1)];

            const randomQuestion = question[random(question.length - 1)];

            variants.push({
                question: randomQuestion.split(' ').filter(letter => letter !== TypeLetter.answer).join(' '),
                correctAnswer: correctAnswer,
                variantsAnswer: shuffle([correctAnswer, incorrectAnswers])
            });
        }
    }

    if (theme === ThemeGrammarMix.formsOfAdjectives || theme === ThemeGrammarMix.verbHave
        || theme === ThemeGrammarMix.futureActions || theme === ThemeGrammarMix.gerundInfinitive
        || theme === ThemeGrammarMix.regularIrregularVerbs || theme === ThemeGrammarMix.passiveVoicePrSimple
        || theme === ThemeGrammarMix.passiveVoicePrContinuous || theme === ThemeGrammarMix.firstConditional
        || theme === ThemeGrammarMix.secondConditional || theme === ThemeGrammarMix.thirdConditional 
        || theme === ThemeGrammarMix.passiveVoicePastSimple) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        const data = fetchData['1'];

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, incorrectAnswers} = data[random(data.length - 1)];

            variants.push({
                question,
                correctAnswer: correctAnswer,
                variantsAnswer: shuffle([correctAnswer, incorrectAnswers])
            });
        }
    }

    return variants;
};