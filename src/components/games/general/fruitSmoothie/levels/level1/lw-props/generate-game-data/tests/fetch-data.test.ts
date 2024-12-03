import {fetchData} from '../fetch-data';
import {ThemeFruitSmoothie} from '@custom-types';
import {dataNumber, dataPronouns, dataToBe, dataVerbForm} from './data-test';
import {FetchDataItem} from './../../../type';
import {isEqual} from 'lodash';

const dataResult:FetchDataItem = {
    question: '',
    correct: '',
    incorrectAnswers: []
};

const answersQty = 10;

describe('Fetch data', () => {

    test('Fetch data tobe theme', async () => {
        global.fetch = ():any => Promise.resolve(dataToBe);
        const data = await fetchData({theme: ThemeFruitSmoothie.toBe, answersQty, complexity: 1, level: 3});

        data.forEach((dataItem) => {
            expect(dataItem.question).not.toBeNull();
            expect(dataItem.correct).not.toBeNull();

            dataItem.incorrectAnswers.forEach((answer) => expect(answer).not.toBeNull());

            expect(dataItem.incorrectAnswers).toHaveLength(3);

            expect(isEqual(
                Object.keys(dataItem).sort(),
                Object.keys(dataResult).sort()))
                .toBe(true);
        });
    });

    test('Length data tobe', async () => {
        global.fetch = ():any => Promise.resolve(dataToBe);
        const data = await fetchData({theme: ThemeFruitSmoothie.toBe, answersQty, complexity: 1, level: 3});

        expect(data).toHaveLength(answersQty);
    });

    test('Data items number', async () => {
        global.fetch = ():any => Promise.resolve(dataNumber);
        const data = await fetchData({theme: ThemeFruitSmoothie.number, answersQty, complexity: 1, level: 3});

        data.forEach((dataItem) => {
            expect(dataItem.question).not.toBeNull();
            expect(dataItem.correct).not.toBeNull();

            dataItem.incorrectAnswers.forEach((answer) => expect(answer).not.toBeNull());

            expect(dataItem.incorrectAnswers).toHaveLength(3);

            expect(isEqual(
                Object.keys(dataItem).sort(),
                Object.keys(dataResult).sort()))
                .toBe(true);
        });
    });

    test('Length data number', async () => {
        global.fetch = ():any => Promise.resolve(dataNumber);
        const data = await fetchData({theme: ThemeFruitSmoothie.number, answersQty, complexity: 1, level: 3});

        expect(data).toHaveLength(answersQty);
    });

    test('Data items pronouns', async () => {
        global.fetch = ():any => Promise.resolve(dataPronouns);
        const data = await fetchData({theme: ThemeFruitSmoothie.pronouns, answersQty, complexity: 1, level: 3});

        data.forEach((dataItem) => {
            expect(dataItem.question).not.toBeNull();
            expect(dataItem.correct).not.toBeNull();

            dataItem.incorrectAnswers.forEach((answer) => expect(answer).not.toBeNull());

            expect(dataItem.incorrectAnswers).toHaveLength(3);

            expect(isEqual(
                Object.keys(dataItem).sort(),
                Object.keys(dataResult).sort()))
                .toBe(true);
        });

    });
    test('Length data pronouns', async () => {
        global.fetch = ():any => Promise.resolve(dataPronouns);
        const data = await fetchData({theme: ThemeFruitSmoothie.pronouns, answersQty, complexity: 1, level: 3});

        expect(data).toHaveLength(answersQty);
    });

    for (let complexity = 1; complexity <= 3; complexity++) {
        test('Verb forms theme', async () => {
            global.fetch = ():any => Promise.resolve(dataVerbForm);
            const data = await fetchData({theme: ThemeFruitSmoothie.verbForms, answersQty, complexity, level: 3});

            data.forEach((dataItem) => {
                //Проверка на 3 неправильных ответа
                expect(dataItem.question).not.toBeNull();
                expect(dataItem.correct).not.toBeNull();

                dataItem.incorrectAnswers.forEach((answer) => expect(answer).not.toBeNull());

                expect(dataItem.incorrectAnswers).toHaveLength(3);

                expect(isEqual(
                    Object.keys(dataItem).sort(),
                    Object.keys(dataResult).sort()))
                    .toBe(true);
            });

        });
        test('Length data verb forms', async () => {
            const data = await fetchData({theme: ThemeFruitSmoothie.verbForms, answersQty, complexity, level: 3});

            expect(data).toHaveLength(answersQty);
        });

    }
});