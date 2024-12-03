import {prepareAlphabet} from '../';

describe('prepareAlphabet', () => {
    let letters:string;
    const randomValue = Math.random();

    if (randomValue > 0.66) {
        letters = 'capital';
    } else if (randomValue > 0.33) {
        letters = 'small';
    } else letters = 'random';

    const alphabet = prepareAlphabet(letters);

    test('alphabet length', async () => {
        expect(alphabet.length).toEqual(26);
    });
    test('register match', async () => {
        if (letters === 'random') {
            expect(alphabet.filter((letter) => letter === letter.toLowerCase()).length).toBe(13);
        } else {
            expect(alphabet.every((letter) => letter === ((letters === 'small')
                ? letter.toLowerCase()
                : letter.toUpperCase()))).toBeTruthy();
        }
    });
});
