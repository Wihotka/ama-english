import {placeWord} from '../utils';

import {directionT} from '../../../type';

const getParams = (direction:directionT, word:Array<string>) => ({
    size: 3,
    word,
    fields: [
        {row: 0, col: 0, letter: null},
        {row: 1, col: 0, letter: null},
        {row: 0, col: 1, letter: null},
        {row: 1, col: 1, letter: null},
    ],
    direction
});

describe('getDiagonalPossiblePositions', () => {
    const getPositions = (direction:directionT, word:Array<string>) => placeWord(getParams(direction, word));

    ['vertical', 'diagonalToRight'].forEach(direction => {
        test('2 letters', () => {
            const {result} = getPositions(direction as directionT, ['a', 'a']);

            expect(result).not.toEqual(null);
        });
        test('3 letters', () => {
            const {result} = getPositions(direction as directionT, ['a', 'a', 'a']);

            expect(result).toEqual(null);
        });
    });
});
