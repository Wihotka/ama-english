import {sample} from 'lodash';

import {placeWord} from './utils';

import {GenerateGDCB, WordsThemes} from '@custom-types';
import {directionT, CellT, WordBoxGameT, FilledCellT} from '../../type';

export const generateGameData:GenerateGDCB<WordBoxGameT> = async ({gameSettings, getWords, staticEngData}) => {
    const {wordsQty, level, theme, course} = gameSettings;
    const {alphabet} = staticEngData;

    const sizeResolver:{ [key:number]:number } = {
        4: 6,
        5: 8,
        6: 8,
        7: 10,
        8: 10
    };
    const size = sizeResolver[wordsQty];
    const directionResolver:{ [key:number]:Array<directionT> } = {
        1: ['vertical', 'horizontal'],
        2: ['vertical', 'horizontal', 'reverseVertical', 'reverseHorizontal'],
        3: ['vertical', 'horizontal', 'diagonalToRight'],
        4: ['vertical', 'horizontal', 'reverseVertical', 'reverseHorizontal', 'diagonalToRight', 'diagonalToLeft']
    };
    const directions = directionResolver[level];

    const wordsData = await getWords({
        wordsQty: 100,
        theme: theme as WordsThemes,
        studyStage: course - 1 ? [course - 1, course] : [course]
    });

    // Получаем все слова с бэка
    const allWordsData = await getWords({
        studyStage: [1, 2, 3, 4],
        wordsQty: 10000
    });

    const allWords = allWordsData.words.map(({word}) => word.toLowerCase());
    const words = wordsData.words.map(({word}) => word.toLowerCase()).filter(word =>
        word.length <= size && !word.includes(' '));
    let wordIndex = 0;
    let inaccessibleDirections:Array<directionT> = [];
    const placedWords:Array<{ word:string, start?:FilledCellT }> = [];

    let fields:Array<CellT> = new Array(size).fill('').map((row, rowIndex) => new Array(size).fill('').map((col, colIndex) => ({
        row: rowIndex, col: colIndex, letter: null
    }))).flat();

    while (placedWords.length < wordsQty) {
        if (!words[wordIndex]) break;

        let word = words[wordIndex].split('');

        //todo попробовать "очистить" и вытащить функцию

        const applyWord = () => {
            const accessibleDirections = directions.filter(direction => !inaccessibleDirections.includes(direction));
            const isUnique = placedWords.every(({word}) =>
                !(word.includes(words[wordIndex]) || words[wordIndex].includes(word)));

            if (!isUnique) {
                wordIndex++;

                return {isContinue: true};
            }

            if (accessibleDirections.length === 0) {
                wordIndex++;

                if (!words[wordIndex]) return {isContinue: false};

                word = words[wordIndex].split('');
                inaccessibleDirections = [];
                applyWord();

                return {isContinue: true};
            }

            const direction = sample(accessibleDirections) as directionT;

            const {result, start} = placeWord({direction, word, fields, size});

            if (result !== null) {
                fields = result;
                inaccessibleDirections = [];
                wordIndex++;
                placedWords.push({word: word.join(''), start});

                return {isContinue: true};
            }

            inaccessibleDirections.push(direction);
            applyWord();

            return {isContinue: true};
        };

        const {isContinue} = applyWord();

        if (!isContinue) break;
    }

    const finalFields:Array<FilledCellT> = fields.map(cell => cell.letter === null
        ? {
            ...cell,
            letter: sample(alphabet.filter(letter => !['a', 'e', 'i', 'o', 'u', 's'].includes(letter))) as string
        }
        : cell as FilledCellT);

    return {
        fields: finalFields,
        size,
        placedWords,
        words,
        allWords,
        directions
    };
};
