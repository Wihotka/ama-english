import {sample} from 'lodash';

import {getLinePossiblePositions, getDiagonalPossiblePositions} from './';

import {directionT, CellT} from '../../../type';

type PlaceWordT = {
    direction:directionT,
    word:Array<string>,
    fields:Array<CellT>
    size:number
};

export const placeWord = ({direction, word, fields, size}:PlaceWordT) => {
    if (['vertical', 'horizontal', 'reverseVertical', 'reverseHorizontal'].includes(direction)) {
        const isVertical = ['vertical', 'reverseVertical'].includes(direction);
        const isReverse = ['reverseVertical', 'reverseHorizontal'].includes(direction);
        const placedWord = isReverse ? [...word].reverse() : word;

        const {possiblePositions} = getLinePossiblePositions({size, isVertical, fields, placedWord});

        if (possiblePositions.length > 0) {
            const {col, row} = sample(possiblePositions) as { col:number, row:number };
            let startCol = col;
            let startRow = row;

            const result = [...fields];

            placedWord.forEach((letter, index, array) => {
                const currentCell = result.find(field =>
                    field.col === (isVertical ? col : col + index) &&
                    field.row === (isVertical ? row + index : row)) as CellT;

                currentCell.letter = letter;

                if (index === array.length - 1 && isReverse) {
                    startRow = currentCell.row;
                    startCol = currentCell.col;
                }
            });

            return {result, start: {col: startCol, row: startRow, letter: word[0]}};
        }
    } else if (['diagonalToRight', 'diagonalToLeft'].includes(direction)) {
        const isDiagonalToRight = direction === 'diagonalToRight';

        const {possiblePositions} = getDiagonalPossiblePositions({size, word, fields, isDiagonalToRight});

        if (possiblePositions.length > 0) {
            const {col, row} = sample(possiblePositions) as { col:number, row:number };

            const result = [...fields];

            word.forEach((letter, index) => {
                const currentCell = result.find(field =>
                    field.col === (isDiagonalToRight ? (col + index) : (col - index)) &&
                    field.row === (row + index)) as CellT;

                currentCell.letter = letter;
            });

            return {result, start: {col, row, letter: word[0]}};
        }
    }

    return {result: null};
};
