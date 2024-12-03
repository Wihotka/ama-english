import {updateFieldT} from '../type';

export const updateField:updateFieldT = (props) => {
    const {answersQty, changeGPDOnline, initFinishPlaying, currentWordIndex, startTimer} = props;

    changeGPDOnline({isFieldUpdated: true, isTimeGoing: false});

    setTimeout(() => {
        answersQty === currentWordIndex + 1 ? initFinishPlaying() : changeGPDOnline({
            mistakeQty: 0,
            typedWord: [],
            removedKeys: [],
            timer: startTimer,
            selectionType: '',
            missingLetters: [],
            isTimerBegan: false,
            emptyPartIndexes: [],
            isFieldUpdated: false,
            currentLetterIndex: 0,
            timeForRemoveKey: startTimer - 50,
            currentWordIndex: currentWordIndex + 1
        });
    }, 500);
};