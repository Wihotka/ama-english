import {CellT} from '../../../type';

type getLinePossiblePositionsT = {
    size:number,
    isVertical:boolean,
    fields:Array<CellT>,
    placedWord:Array<string>
};

export const getLinePossiblePositions = ({size, isVertical, fields, placedWord}:getLinePossiblePositionsT) => {
    const param = isVertical ? 'col' : 'row';
    const possiblePositions = [];

    for (let i = 0; i < size; i++) {
        const currentPos = fields.filter(field => field[param] === i).map(({letter}) => letter);

        for (let j = 0; j <= currentPos.length - placedWord.length; j++) {
            for (let k = 0; k < placedWord.length; k++) {
                if (currentPos[j + k] === placedWord[k] || currentPos[j + k] === null) {
                    if (k === placedWord.length - 1) {
                        possiblePositions.push(isVertical ? {col: i, row: j} : {col: j, row: i});
                    }
                } else break;
            }
        }
    }

    return {possiblePositions};
};
