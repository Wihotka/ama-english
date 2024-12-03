import {SortOut_Preposition} from '../../../../type';
import {getGameElements, getMoveElements} from '..';

describe('getMoveElements', () => {
    const {fieldElements} = getGameElements(5, 15);
    const possibleMoves:SortOut_Preposition[] = [
        'left',
        'right',
        'under',
        'above',
        'between',
    ];
    const moveElements = getMoveElements({
        columnsNumber: 4,
        fieldElements,
        maxIndex: 15,
        possibleMoves,
    });
    const coords = fieldElements.map(({index}) => index);

    test('no invalid moves', () => {
        expect(
            moveElements.every(({validMoves}) =>
                validMoves.every(
                    ({answerIndex}) => !coords.includes(answerIndex)
                )
            )
        );
    });
});
