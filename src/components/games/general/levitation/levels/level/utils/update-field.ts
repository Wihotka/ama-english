import {setRandomCoords} from './set-random-coords';

import {updateFieldP} from '../type';

export const updateField = (props:updateFieldP) => {
    const {
        gamePlayData,
        changeGPDOnline,
        index,
        speed,
        words,
        isCorrectFeather,
        isHasMistake,
        initFinishPlaying
    } = props;
    const {
        correctAnswerWithFirstTry,
        correctAnswerWithSecondTry,
        successPressedIndexes,
        errorPressedIndexes,
        currentWordIndex,
    } = gamePlayData;

    const isLastWord = currentWordIndex === words.length - 1;
    const isCorrectWithFirstTry = isCorrectFeather && !isHasMistake;
    const isCorrectWithSecondTry = isCorrectFeather && isHasMistake;

    changeGPDOnline({
        isFeatherPressed: true,
        successPressedIndexes: isCorrectFeather ? [...successPressedIndexes, index] : successPressedIndexes,
        errorPressedIndexes: !isCorrectFeather ? [...errorPressedIndexes, index] : errorPressedIndexes
    });

    setTimeout(() => {
        changeGPDOnline({
            isFieldUpdating: true,
            isFeatherPressed: false,
        });
    }, 500);

    setTimeout(() => {
        isLastWord && isCorrectFeather || isLastWord && isHasMistake
            ? initFinishPlaying()
            : null;

        setRandomCoords({gamePlayData, changeGPDOnline, speed});

        changeGPDOnline({
            currentWordIndex: currentWordIndex + 1,
            mistakeQty: 0,
            correctAnswerWithFirstTry: isCorrectWithFirstTry ? correctAnswerWithFirstTry + 1 : correctAnswerWithFirstTry,
            correctAnswerWithSecondTry: isCorrectWithSecondTry ? correctAnswerWithSecondTry + 1 : correctAnswerWithSecondTry,
        });
    }, 1000);
};