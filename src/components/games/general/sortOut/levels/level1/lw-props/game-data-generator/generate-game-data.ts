import {GenerateGDCB} from '@custom-types/game';
import {random, sample} from 'lodash';
import {
    SortOutGameT,
    SortOut_GameFieldData,
    SortOut_GameTask,
    SortOut_Preposition,
} from '../../../../type';
import {getGameElements, getMoveElements} from '../../utils';

const initialElementsQtyResolver = {
    '4x3': {min: 3, max: 4},
    '4x4': {min: 4, max: 6},
    '4x5': {min: 5, max: 7},
};

const possibleMovesResolver:{ [k:number]:SortOut_Preposition[] } = {
    1: ['left', 'right'],
    2: ['under', 'above', 'between'],
    3: ['left', 'right', 'under', 'above', 'between'],
};

export const generateGameData:GenerateGDCB<SortOutGameT> = async ({
    gameSettings,
}) => {
    const {fieldSize, complexity, answersQty} = gameSettings;
    const [columnsNumber, rowsNumber] = fieldSize
        .split('x')
        .map((s) => Number(s));
    const maxIndex = columnsNumber * rowsNumber - 1;

    const gameTasks:SortOut_GameTask[] = [];
    const gameFieldData:SortOut_GameFieldData[] = [];

    for (let taskI = 0; taskI < answersQty; taskI++) {
        const {min, max} = initialElementsQtyResolver[fieldSize];
        const initialElementsQty = random(min, max);

        const gameElements = getGameElements(initialElementsQty, maxIndex);
        const {fieldElements, dndElements, answerElement} = gameElements;

        const possibleMoves = possibleMovesResolver[complexity];

        const moveElements = getMoveElements({
            possibleMoves,
            fieldElements,
            columnsNumber,
            maxIndex,
        });

        const randomMoveElement = sample(moveElements);

        if (randomMoveElement) {
            const {targetElement, validMoves} = randomMoveElement;
            const randomMove = sample(validMoves);

            if (randomMove && answerElement) {
                const {preposition, answerIndex, extraElementImage}
                    = randomMove;
                const {image} = answerElement;

                gameTasks.push({
                    targetElement,
                    answerElement: {
                        index: answerIndex,
                        image,
                    },
                    preposition,
                    extraElementImage,
                });

                gameFieldData.push({fieldElements, dndElements});
            }
        }
    }

    return {
        gameFieldData,
        gameTasks,
        rows: rowsNumber,
        cols: columnsNumber,
    };
};
