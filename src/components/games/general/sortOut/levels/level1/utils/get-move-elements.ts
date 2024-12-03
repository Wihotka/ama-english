import {SortOut_FieldElement, SortOut_Preposition} from '../../../type';

type GetAllValidMovesT = {
    possibleMoves:SortOut_Preposition[];
    fieldElements:SortOut_FieldElement[];
    columnsNumber:number;
    maxIndex:number;
};

type ValidMoveT = {
    preposition:SortOut_Preposition;
    answerIndex:number;
    extraElementImage?:number;
};

const isEmpty = (coords:number[], index:number) => !coords.includes(index);

export const getMoveElements = ({
    possibleMoves,
    fieldElements,
    columnsNumber,
    maxIndex,
}:GetAllValidMovesT) => {
    const coords = fieldElements.map(({index}) => index);
    const result:{
        targetElement:SortOut_FieldElement;
        validMoves:ValidMoveT[];
    }[] = [];

    for (const {index, image} of fieldElements) {
        const validMoves:ValidMoveT[] = [];

        const targetElement = {index, image};

        if (possibleMoves.includes('left')) {
            if (index % columnsNumber !== 0) {
                isEmpty(coords, index - 1) &&
                    validMoves.push({
                        preposition: 'left',
                        answerIndex: index - 1,
                    });
            }
        }

        if (possibleMoves.includes('right')) {
            if ((index + 1) % columnsNumber !== 0) {
                isEmpty(coords, index + 1) &&
                    validMoves.push({
                        preposition: 'right',
                        answerIndex: index + 1,
                    });
            }
        }

        if (possibleMoves.includes('under')) {
            if (index + columnsNumber <= maxIndex) {
                isEmpty(coords, index + columnsNumber) &&
                    validMoves.push({
                        preposition: 'under',
                        answerIndex: index + columnsNumber,
                    });
            }
        }

        if (possibleMoves.includes('above')) {
            if (index - columnsNumber >= 0) {
                isEmpty(coords, index - columnsNumber) &&
                    validMoves.push({
                        preposition: 'above',
                        answerIndex: index - columnsNumber,
                    });
            }
        }

        if (possibleMoves.includes('between')) {
            if ((index - 2) % columnsNumber < 2) {
                isEmpty(coords, index - 1) &&
                    !isEmpty(coords, index - 2) &&
                    validMoves.push({
                        preposition: 'between',
                        answerIndex: index - 1,
                        extraElementImage: fieldElements.find(
                            ({index: i}) => i === index - 2
                        )?.image,
                    });
            }

            if ((index + 2) % columnsNumber > 1) {
                isEmpty(coords, index + 1) &&
                    !isEmpty(coords, index + 2) &&
                    validMoves.push({
                        preposition: 'between',
                        answerIndex: index + 1,
                        extraElementImage: fieldElements.find(
                            ({index: i}) => i === index + 2
                        )?.image,
                    });
            }
        }

        validMoves.length && result.push({targetElement, validMoves});
    }

    return result;
};
