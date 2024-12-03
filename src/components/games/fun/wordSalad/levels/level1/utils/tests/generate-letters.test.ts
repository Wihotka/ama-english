import {generateLetters} from '../';

describe('generateLetters', () => {
    const letters = generateLetters();

    test('letters quantity', async () => {
        expect(letters.length).toEqual(16);
    });
    test('is one symbol', async () => {
        expect(letters.every(letter => letter.length === 1)).toBeTruthy();
    });
});
