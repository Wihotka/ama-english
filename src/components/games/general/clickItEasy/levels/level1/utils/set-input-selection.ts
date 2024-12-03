import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {setInputSelectionT} from '../type';

export const setInputSelection:setInputSelectionT = (props) => {
    const {
        type,
        typedSentence,
        mistakeQty,
        updateFieldCB,
        changeGPDOnline,
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
        changeGPDOnline({
            mistakeQty: mistakeQty + 1,
            typedSentence: mistakeQty === 0 ? [] : [...typedSentence],
            selectionType: ''
        });
    };

    changeGPDOnline({selectionType: type});
    
    setGameTimeout(type === 'success' ? userWroteCorrectWord : userWroteWrongWord, 500);
};