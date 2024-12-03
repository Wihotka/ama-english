import {CellT} from '../../../type';

type getDiagonalPossiblePositionsT = {
    size:number,
    isDiagonalToRight:boolean,
    fields:Array<CellT>,
    word:Array<string>
};

export const getDiagonalPossiblePositions = ({size, word, fields, isDiagonalToRight}:getDiagonalPossiblePositionsT) => {
    const possiblePositions = [];

    for (let i = 0; i <= (size - word.length); i++) {
        if (isDiagonalToRight) {
            for (let j = 0; j <= (size - word.length); j++) {
                for (let k = 0; k < word.length; k++) {
                    const {letter} = fields.find(({row, col}) => row === i + k && col === j + k) || {};

                    if (letter === word[k] || letter === null) {
                        if (k === word.length - 1) {
                            possiblePositions.push({row: i, col: j});
                        }
                    } else break;
                }
            }
        } else {
            for (let j = (size - 1); j >= (word.length - 1); j--) {
                for (let k = 0; k < word.length; k++) {
                    const {letter} = fields.find(({row, col}) => row === i + k && col === j - k) || {};

                    if (letter === word[k] || letter === null) {
                        if (k === word.length - 1) {
                            possiblePositions.push({row: i, col: j});
                        }
                    } else break;
                }
            }
        }
    }

    return {possiblePositions};
};
