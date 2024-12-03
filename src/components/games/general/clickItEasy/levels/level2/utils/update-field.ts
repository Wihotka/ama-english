import {updateFieldT} from '../type';

export const updateField:updateFieldT = (props) => {
    const {answersQty, startTimer, changeGPDOnline, initFinishPlaying, currentSentenceIndex} = props;

    console.log('SENT IND: ', currentSentenceIndex);
    console.log('ANSWERS: ', answersQty);

    const fieldUpdating = () => {
        changeGPDOnline({isFieldUpdated: true, pressedKeyIndex: -1, selectionType: '', mistakeQty: 0});

        setTimeout(() => {
            changeGPDOnline({
                currentSentenceIndex: currentSentenceIndex + 1
            });
        }, 300);

        setTimeout(() => {
            changeGPDOnline({
                typedSentence: [],
                timer: startTimer,
                isFieldUpdated: false
            });
        }, 700);
    };

    answersQty === currentSentenceIndex + 1 ? initFinishPlaying() : fieldUpdating();
};