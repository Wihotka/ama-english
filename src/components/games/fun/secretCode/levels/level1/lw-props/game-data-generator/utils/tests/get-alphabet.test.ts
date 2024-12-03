import {getAlphabet} from '..';

describe('getAlphabet', () => {
    const alphabet = getAlphabet();

    test('alphabet length', () => {
        expect(alphabet.length).toEqual(26);
    });

    test('every alphabet letter has color', () => {
        expect(alphabet.every(({color}) => Boolean(color))).toBeTruthy();
    });

    test('alphabet has unique letters', () => {
        const isArrayUnique = new Set(alphabet).size === alphabet.length;

        expect(isArrayUnique).toBeTruthy();
    });
});
