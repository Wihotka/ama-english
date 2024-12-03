import {sampleSize} from 'lodash';

export const prepareAlphabet = (letters:string):Array<string> => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    switch (letters) {
        case 'capital':
            return alphabet.toUpperCase().split('');
        case 'random':
            let smallLettersArr = alphabet.split('').map((letter, index) => ({letter, index}));
            const bigLettersArr = sampleSize(smallLettersArr, alphabet.length / 2);

            smallLettersArr = smallLettersArr.filter(({letter}) =>
                !bigLettersArr.find(data => data.letter === letter));

            return [...smallLettersArr, ...bigLettersArr.map(({letter, index}) => ({
                letter: letter.toUpperCase(),
                index
            }))].sort((a, b) => a.index - b.index).map(({letter}) => letter);
        default:
            return alphabet.split('');
    }
};
