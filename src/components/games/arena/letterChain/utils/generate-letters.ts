import {sample} from 'lodash';

export const generateLetters = ():Array<string> => {
    const letters:Array<string> = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const vowels = 'aeiouy'.toUpperCase().split('');

    while (letters.length < 16) {
        const randomLetter = sample(letters.length < 4 ? vowels : alphabet);

        if ((letters.filter(letter => letter === randomLetter).length < 3) && (randomLetter !== undefined)) {
            letters.push(randomLetter);
        }
    }

    return letters;
};
