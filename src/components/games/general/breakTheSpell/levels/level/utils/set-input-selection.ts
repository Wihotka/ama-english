import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {setInputSelectionT} from '../type';

export const setInputSelection:setInputSelectionT = (props) => {
    const {
        type,
        typedWord,
        mistakeQty,
        updateFieldCB,
        changeGPDOnline,
        updateTypedWordCB,
        firstTryCorrectAnswerQty,
        secondTryCorrectAnswerQty,
    } = props;

    const userWroteCorrectWord = () => {
        changeGPDOnline({
            firstTryCorrectAnswerQty: mistakeQty === 0 ? firstTryCorrectAnswerQty + 1 : firstTryCorrectAnswerQty,
            secondTryCorrectAnswerQty: mistakeQty === 1 ? secondTryCorrectAnswerQty + 1 : secondTryCorrectAnswerQty,
        });

        setGameTimeout(() => updateFieldCB(), 500);
    };

    const userWroteWrongWord = () => {
        mistakeQty === 1 ? updateTypedWordCB() : null;
        mistakeQty === 2 ? setGameTimeout(() => updateFieldCB(), 500) : null;

        changeGPDOnline({
            mistakeQty: mistakeQty + 1,
            typedWord: [...typedWord],
            selectionType: ''
        });
    };

    changeGPDOnline({selectionType: type});
    setGameTimeout(type === 'success' ? userWroteCorrectWord : userWroteWrongWord, 500);
};