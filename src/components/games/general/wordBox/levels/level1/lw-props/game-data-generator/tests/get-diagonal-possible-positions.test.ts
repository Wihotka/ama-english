import {getDiagonalPossiblePositions} from '../utils';

import {CellT} from '../../../type';

const getParams = (fields:Array<CellT>) => ({
    size: 3,
    word: ['a', 'a'],
    fields,
    isDiagonalToRight: true
});

describe('getDiagonalPossiblePositions', () => {
    const getPositions = (cell:CellT) => getDiagonalPossiblePositions(getParams([
        cell,
        {row: 1, col: 0, letter: null},
        {row: 2, col: 0, letter: null},
        {row: 0, col: 1, letter: null},
        {row: 1, col: 1, letter: null},
        {row: 2, col: 1, letter: null},
        {row: 0, col: 2, letter: null},
        {row: 1, col: 2, letter: null},
        {row: 2, col: 2, letter: null}
    ]));

    test('empty cell', () => {
        const {possiblePositions} = getPositions({row: 0, col: 0, letter: null});

        expect(possiblePositions.length).toEqual(4);
    });
    test('cell is match', () => {
        const {possiblePositions} = getPositions({row: 0, col: 0, letter: 'a'});

        expect(possiblePositions.length).toEqual(4);
    });
    test('cell is not match', () => {
        const {possiblePositions} = getPositions({row: 0, col: 0, letter: 'b'});

        expect(possiblePositions.length).toEqual(3);
    });
});
