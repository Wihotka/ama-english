import {fieldUpdateT} from '../type';

export const fieldUpdate:fieldUpdateT = (props) => {
    const {
        mistakeQty,
        answersQty,
        userAnswerQty,
        speedInSeconds,
        changeGPDOnline,
        isCorrectAnswer,
        initFinishPlaying,
        currentWordsIndex,
        successWithFirstTry,
        successWithSecondTry
    } = props;

    changeGPDOnline({
        isFieldUpdate: true,
        timer: speedInSeconds,
        mistakeQty: mistakeQty + 1,
        successWithFirstTry: mistakeQty === 0 && isCorrectAnswer ? successWithFirstTry + 1 : successWithFirstTry,
        successWithSecondTry: mistakeQty === 1 && isCorrectAnswer ? successWithSecondTry + 1 : successWithSecondTry
    });

    setTimeout(() => {
        userAnswerQty + 1 === answersQty
            ? initFinishPlaying()
            : changeGPDOnline(
                {
                    userAnswerQty: userAnswerQty + 1,
                    correctWordStatus: '',
                    currentWordsIndex: currentWordsIndex + 1
                });
    }, 500);

    setTimeout(() => changeGPDOnline({
        mistakeQty: 0,
        isAnimate: false,
        isFieldUpdate: false
    }), 1500);

    setTimeout(() =>
        changeGPDOnline({
            isAnimate: true,
            timer: speedInSeconds,
        }), 1600);
};