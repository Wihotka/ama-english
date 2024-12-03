import {updateCurrentFieldForNextWord} from '../utils';

import {handleHintCBP} from '../type';

export const handleHintCB = ({gamePlayData, changeGPDOnline, gameData, initFinishPlaying}:handleHintCBP):void => {
    const {words} = gameData;
    const {
        currentWordIndex,
        pseudoCurrentWordArray,
        pressedPuzzleIndexes,
        successPuzzleIndexes,
        mixedPuzzlesArray,
    } = gamePlayData;

    const pseudoLength = pseudoCurrentWordArray.length;
    const realLength = words[currentWordIndex].word.length;

    const firstLetterIndex = mixedPuzzlesArray.indexOf(words[currentWordIndex].word[0]);
    const lastLetterIndex = mixedPuzzlesArray.lastIndexOf(words[currentWordIndex].word[realLength - 1]);

    const isFirstLetterInserted = pseudoCurrentWordArray[0]; // first puzzle already filled
    const isLastLetterLost = pseudoLength === realLength - 1; // lost the last puzzle

    isLastLetterLost
        ? updateCurrentFieldForNextWord({
            result: true,
            gamePlayData,
            gameData,
            initFinishPlaying,
            changeGPDOnline
        }) : '';

    changeGPDOnline({
        isHintButtonPressed: true,
        pressedPuzzleIndexes: getNewStateOfArray(isFirstLetterInserted, firstLetterIndex, lastLetterIndex, pressedPuzzleIndexes),
        successPuzzleIndexes: getNewStateOfArray(isFirstLetterInserted, firstLetterIndex, lastLetterIndex, successPuzzleIndexes),
        pseudoCurrentWordArray: !pseudoLength
            ? [...pseudoCurrentWordArray, words[currentWordIndex].word[0]]
            : pseudoCurrentWordArray
    });
};

type getNewStateOfArrayT = (
    isFirstLetterInserted:string,
    firstEl:number,
    lastEl:number,
    state:Array<number>
) => Array<number>;

const getNewStateOfArray:getNewStateOfArrayT = (
    isFirstLetterInserted,
    firstEl,
    lastEl,
    state
) => isFirstLetterInserted ? [...state, lastEl] : [...state, ...[firstEl, lastEl]];
