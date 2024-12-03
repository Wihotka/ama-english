import {directionT} from '@components/games/general/wordBox/levels/level1/type';

type directionConditionT = {
    direction:directionT | null,
    selectedRow:number,
    selectedCol:number,
    col:number,
    row:number
};

export const directionCondition = ({direction, selectedRow, selectedCol, col, row}:directionConditionT) => {
    switch (direction) {
        case 'vertical':
            return [row + 1, row - 1].includes(selectedRow) && col === selectedCol;
        case 'horizontal':
            return [col + 1, col - 1].includes(selectedCol) && row === selectedRow;
        case 'diagonalToRight':
            return ((col + 1) === selectedCol && (row + 1) === selectedRow)
                || ((col - 1) === selectedCol && (row - 1) === selectedRow);
        case 'diagonalToLeft':
            return ((col - 1) === selectedCol && (row + 1) === selectedRow)
                || ((col + 1) === selectedCol && (row - 1) === selectedRow);
    }

    return false;
};
