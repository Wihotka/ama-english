import {shuffle} from 'lodash';

type generateArrayFromString = (
    str:string,
    longerBy:number,
    alphabet:Array<string>
) => Array<string>;

export const generateMixedPuzzleArray:generateArrayFromString = (str, longerBy, alphabet) =>
    longerBy ? generateLongerPuzzleArray(str, longerBy, alphabet) : generateCommonPuzzleArray(str);

const generateCommonPuzzleArray = (str:string):Array<string> =>
    shuffle(str.replace(/[- ]/i, '').split(''));

const generateLongerPuzzleArray:generateArrayFromString = (str, longerBy, alphabet) => {
    const commonPuzzleArray = generateCommonPuzzleArray(str);
    const additionalPuzzleArrayLength = Math.ceil(str.length / 100 * longerBy);
    const additionalPuzzleArray = shuffle(alphabet).splice(0, additionalPuzzleArrayLength);

    return shuffle(commonPuzzleArray.concat(additionalPuzzleArray));
};