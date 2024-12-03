import {fetchData} from './../fetch-data';
import {dataPronouns, dataNumber, dataNumerals, dataDeterminers} from './data-test';

import {ThemeGrammarMix} from '@custom-types';

describe('Generate gameData Grammar Mix Level 1', () => {

    test('Test theme pronouns', async () => {
        global.fetch = ():any => Promise.resolve(dataPronouns);

        const result = await fetchData({theme: ThemeGrammarMix.pronouns, answersQty: 10});

        result.forEach(resultObj => {
            expect(resultObj.question).not.toBeNull();
            expect(resultObj.correctAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).toHaveLength(2);
        });
    });

    test('Test theme number', async () => {
        global.fetch = ():any => Promise.resolve(dataNumber);

        const result = await fetchData({theme: ThemeGrammarMix.number, answersQty: 10});

        result.forEach(resultObj => {
            expect(resultObj.question).not.toBeNull();
            expect(resultObj.correctAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).toHaveLength(2);
        });
    });

    test('Test theme numerals', async () => {
        global.fetch = ():any => Promise.resolve(dataNumerals);

        const result = await fetchData({theme: ThemeGrammarMix.numerals, answersQty: 10});

        result.forEach(resultObj => {
            expect(resultObj.question).not.toBeNull();
            expect(resultObj.correctAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).toHaveLength(2);
        });
    });

    test('Test theme determiners', async () => {
        global.fetch = ():any => Promise.resolve(dataDeterminers);

        const result = await fetchData({theme: ThemeGrammarMix.determiners, answersQty: 10});

        result.forEach(resultObj => {
            expect(resultObj.question).not.toBeNull();
            expect(resultObj.correctAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).not.toBeNull();
            expect(resultObj.variantsAnswer).toHaveLength(2);
        });
    });
});