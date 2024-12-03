import {getLinePossiblePositions} from '../utils';

import {CellT} from '../../../type';

const getParams = (fields:Array<CellT>, isVertical:boolean) => ({
    size: 3,
    placedWord: ['a', 'a'],
    fields,
    isVertical
});

describe('getDiagonalPossiblePositions', () => {
    const getPositions = (cell:CellT, isVertical:boolean) => getLinePossiblePositions(getParams([
        cell,
        {row: 1, col: 0, letter: null},
        {row: 0, col: 1, letter: null},
        {row: 1, col: 1, letter: null},
    ], isVertical));

    [true, false].forEach(isVertical => {
        test('empty cell', () => {
            const {possiblePositions} = getPositions({row: 0, col: 0, letter: null}, isVertical);

            expect(possiblePositions.length).toEqual(2);
        });
        test('cell is match', () => {
            const {possiblePositions} = getPositions({row: 0, col: 0, letter: 'a'}, isVertical);

            expect(possiblePositions.length).toEqual(2);
        });
        test('cell is not match', () => {
            const {possiblePositions} = getPositions({row: 0, col: 0, letter: 'b'}, isVertical);

            expect(possiblePositions.length).toEqual(1);
        });
    })
});
