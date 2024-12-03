import {sampleSize, random, sample} from 'lodash';

import {prepareAlphabet} from '../../../../utils';

import {GenerateGDCB} from '@custom-types';
import {AlphabetGameL2T, LetterT} from '../../type';

export const generateGameData:GenerateGDCB<AlphabetGameL2T> = async ({gameSettings}) => {
    const {letters} = gameSettings;

    const alphabet = prepareAlphabet(letters);
    const data:Array<LetterT> = [];
    const matchedAlphabet = alphabet.join('').match(/.{1,6}/g) as RegExpMatchArray;
    const wrongLetters = matchedAlphabet.map(letters =>
        sampleSize(letters, random(Math.floor(letters.length / 100 * 25), Math.ceil(letters.length / 100 * 25))));
    const wrongLettersIndexes = wrongLetters.map(group => group.map(letter => alphabet.indexOf(letter))).flat();
    const birdsIndexes = [0, 1, 2, 3, 4, 5];

    for (let i = data.length; i < alphabet.length; i++) {
        const isCorrect = !wrongLettersIndexes.includes(i);

        data.push({
            correctLetter: alphabet[i],
            isCorrect,
            wrongLetter: !isCorrect
                ? sample(alphabet.filter(letter => letter !== alphabet[i])) as string
                : null,
            birdNum: sample(birdsIndexes.filter(index => index !== data[i - 1]?.birdNum)) as number,
            id: i
        });
    }

    //todo убрать костыль (для корректного отображения движения последнего элемента)
    data.push({
        correctLetter: '',
        isCorrect: true,
        wrongLetter: null,
        birdNum: 0,
        id: data.length
    });

    return {
        data
    };
};
