import {tail} from 'lodash';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {updateCurrentFieldForNextWordP} from '../type';

export const updateCurrentFieldForNextWord = (
    {result, gamePlayData, gameData, initFinishPlaying, changeGPDOnline}:updateCurrentFieldForNextWordP
):void => {

    const {
        currentWordIndex,
        mistakeQty,
        successAnswerWithFirstTimeQty,
        successAnswerWithSecondTimeQty,
    } = gamePlayData;
    const {words, answersQty} = gameData;

    const isRightAnswerAndHasOneMistake = mistakeQty && result;
    const isRightAnswerAndHasNotMistake = !mistakeQty && result;

    // after return last puzzle to default state -> start animation of field updating
    setGameTimeout( () => {
        changeGPDOnline({
            isFieldUpdate: true,
            successPuzzleIndexes: [],
        });
    }, 600);

    // waiting until end of hiding animation
    setGameTimeout( () => {
        // checking current word index -> finish playing
        currentWordIndex === answersQty - 1 ? initFinishPlaying() : null;

        changeGPDOnline({
            isFieldUpdate: false,
            pseudoCurrentWordArray: [],
            currentWordIndex: plusOneToState(true, currentWordIndex),
            mistakeQty: 0,
            isHintButtonPressed: false,
            pressedPuzzleIndexes: [],
            errorPuzzleIndexes: [],
            words: tail(words),
            successAnswerWithFirstTimeQty: plusOneToState(isRightAnswerAndHasNotMistake, successAnswerWithFirstTimeQty),
            successAnswerWithSecondTimeQty: plusOneToState(isRightAnswerAndHasOneMistake, successAnswerWithSecondTimeQty)
        });
    }, 1200);
};

type plusOneToStateT = (
    condition:boolean | number,
    state:number
) => number;

const plusOneToState:plusOneToStateT = (condition, state) =>
    condition ? ++state : state;