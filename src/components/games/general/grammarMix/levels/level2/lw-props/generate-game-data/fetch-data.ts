import {random, shuffle} from 'lodash';
import {loadLocalGameData} from '@lib/game/utils';

import {ThemeGrammarMix} from '@custom-types';
import {GrammarMixLocalData} from '@lib/game/utils/game-local-data-loader/types';
import {FetchDataT, TypeLetter} from './../../type';

export const fetchData:FetchDataT = async (params) => {
    const {theme, answersQty} = params;
    const variants = [];

    if (theme === ThemeGrammarMix.pronouns) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        const data = fetchData['2'];

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, incorrectAnswers, endOfQuestion} = data[random(data.length - 1)];
            const variantsAnswer = shuffle([correctAnswer, incorrectAnswers]);

            const updateQuestion = question.split(' ').map(letter => {
                if (letter === TypeLetter.answer) {
                    return `(${variantsAnswer[0]}/${variantsAnswer[1]})`;
                }

                if (letter === TypeLetter.endOfQuestion) {
                    return endOfQuestion[random(endOfQuestion.length - 1)];
                }

                return letter;
            });

            variants.push({
                question: updateQuestion,
                correctAnswer: correctAnswer,
                indexVariantsAnswer: question.split(' ').indexOf(TypeLetter.answer)
            });
        }
    }

    if (theme === ThemeGrammarMix.numerals) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        const data = fetchData['2'];

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, endOfQuestion} = data[random(data.length - 1)];

            const selectCorrectAnswer = correctAnswer[random(correctAnswer.length - 1)];

            const updateQuestion = question.split(' ').map(letter => {
                if (letter === TypeLetter.answer) {
                    return `(${correctAnswer.indexOf(selectCorrectAnswer) + 2})`;
                }

                if (letter === TypeLetter.endOfQuestion) {
                    return endOfQuestion[random(endOfQuestion.length - 1)];
                }

                return letter;
            });

            variants.push({
                question: updateQuestion,
                correctAnswer: selectCorrectAnswer,
                indexVariantsAnswer: question.split(' ').indexOf(TypeLetter.answer)
            });
        }
    }

    if (theme === ThemeGrammarMix.number) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, typeAnswer} = fetchData[random(fetchData.length - 1)];

            const updateQuestion = [...question.split(' '), `(${typeAnswer})`];

            variants.push({
                question: updateQuestion,
                correctAnswer: correctAnswer,
                indexVariantsAnswer: updateQuestion.length - 1
            });
        }
    }

    if (theme === ThemeGrammarMix.determiners) {
        const fetchData = await loadLocalGameData(GrammarMixLocalData[theme]);

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, incorrectAnswers} = fetchData[random(fetchData.length - 1)];

            const randomQuestion = question[random(question.length - 1)];
            const variantsAnswer = shuffle([correctAnswer, incorrectAnswers]);

            const updateQuestion = randomQuestion.split(' ').map(letter => {
                if (letter === TypeLetter.answer) {
                    return `(${variantsAnswer[0]}/${variantsAnswer[1]})`;
                }

                return letter;
            });

            variants.push({
                question: updateQuestion,
                correctAnswer: correctAnswer,
                indexVariantsAnswer: randomQuestion.split(' ').indexOf(TypeLetter.answer)
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

        const data = fetchData['2'];

        for (let answer = 0; answer <= answersQty; answer++) {
            const {question, correctAnswer, incorrectAnswers} = data[random(data.length - 1)];
            const variantsAnswer = shuffle([correctAnswer, incorrectAnswers]);

            const updateQuestion = question.split(' ').map(letter => {
                if (letter === TypeLetter.answer) {
                    return `(${variantsAnswer[0]}/${variantsAnswer[1]})`;
                }

                return letter;
            });

            variants.push({
                question: updateQuestion,
                correctAnswer: correctAnswer,
                indexVariantsAnswer: question.split(' ').indexOf(TypeLetter.answer)
            });
        }
    }

    return variants;
};