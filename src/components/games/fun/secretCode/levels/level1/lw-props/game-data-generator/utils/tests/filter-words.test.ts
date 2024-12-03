import {getWords} from '@lib/game/utils';
import {filterWords} from '..';
import {getAlphabet} from '../get-alphabet';

const generateDataForTest = async (complexity:number) => {
    const alphabet = getAlphabet();
    const {words: wordsData} = await getWords({wordsQty: 250});

    return filterWords({wordsData, alphabet, complexity});
};

let filteredWords:ReturnType<typeof filterWords> = [];

describe('filterWords complexity 1', () => {
    beforeAll(async () => {
        filteredWords = await generateDataForTest(1);
    });

    test('words quantity', () => {
        expect(filteredWords.length).toBe(3);
    });

    test('min word length', () => {
        expect(
            filteredWords.every(({word}) => word.length >= 4)
        ).toBeTruthy();
    });

    test('max word length', () => {
        expect(
            filteredWords.every(({word}) => word.length <= 5)
        ).toBeTruthy();
    });
});

describe('filterWords complexity 2', () => {
    beforeAll(async () => {
        filteredWords = await generateDataForTest(2);
    });

    test('words quantity', () => {
        expect(filteredWords.length).toBe(3);
    });

    test('min word length', () => {
        expect(
            filteredWords.every(({word}) => word.length >= 6)
        ).toBeTruthy();
    });

    test('max word length', () => {
        expect(
            filteredWords.every(({word}) => word.length <= 7)
        ).toBeTruthy();
    });
});

describe('filterWords complexity 3', () => {
    beforeAll(async () => {
        filteredWords = await generateDataForTest(3);
    });

    test('words quantity', () => {
        expect(filteredWords.length).toBe(3);
    });

    test('min word length', () => {
        expect(
            filteredWords.every(({word}) => word.length >= 8)
        ).toBeTruthy();
    });

    test('max word length', () => {
        expect(
            filteredWords.every(({word}) => word.length <= 10)
        ).toBeTruthy();
    });
});
