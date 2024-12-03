import {handlePuzzleCBP} from '../type';

// handler of click on the puzzle
export const handlePuzzleCB = ({e, index, gamePlayData, changeGPDOnline, gameData}:handlePuzzleCBP):void => {
    const {words} = gameData;
    const {
        currentWordIndex,
        pseudoCurrentWordArray,
        mistakeQty,
        pressedPuzzleIndexes,
        successPuzzleIndexes,
        errorPuzzleIndexes,
        isPuzzlePressed
    } = gamePlayData;

    const selectedPuzzle = e.target.innerHTML;
    const isRightLetter = selectedPuzzle === words[currentWordIndex].word[pseudoCurrentWordArray.length];
    const isWrongLetter = !isRightLetter;

    changeGPDOnline({
        isPuzzlePressed: !isPuzzlePressed,
        isCandidateFieldActive: true,

        mistakeQty: isWrongLetter ? mistakeQty + 1 : mistakeQty,

        pseudoCurrentWordArray: getNewStateOfArray(isRightLetter, pseudoCurrentWordArray, selectedPuzzle),
        pressedPuzzleIndexes: getNewStateOfArray(true, pressedPuzzleIndexes, index),
        successPuzzleIndexes: getNewStateOfArray(isRightLetter, successPuzzleIndexes, index),
        errorPuzzleIndexes: getNewStateOfArray(isWrongLetter, errorPuzzleIndexes, index)
    });
};

type getNewStateOfArray = (
    condition:boolean,
    state:Array<number | string>,
    elem:number | string
) => Array<number | string>;

const getNewStateOfArray:getNewStateOfArray = (condition, state, elem) =>
    condition ? [...state, elem] : state;