import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {compareValuesT} from './../type';

export const compareValues:compareValuesT = (props) => {
    const {
        options,
        mistakeQty,
        inputValue,
        updateFieldCB,
        changeGPDOnline,
        errorCardIndexes,
        hiddenCardIndexes,
        currentOptionIndex,
        correctWithFirstTryQty,
        correctWithSecondTryQty
    } = props;

    // const getPattern = (str:string) => (str.slice(0, 1).toLowerCase() + str.slice(1, str.length)).replace(/\b\W/g, '');

    // Если последний символ присутствует в массиве, то удаляем его
    const specialSymbols = [' ', '.', '?', '!'];

    const getPattern = (str:string) => {
        if (specialSymbols.includes(str.slice(-1))) str = str.slice(0, -1);
        
        if (str.includes('\`')) str = str.replace('\`', '\'');

        return str.slice(0, 1).toLowerCase() + str.slice(1, str.length);
    };

    const isCorrectAnswer = getPattern(inputValue) === getPattern(options[currentOptionIndex].answer);

    const userGivenCorrectAnswer = () => {
        changeGPDOnline({
            answerStatus: 'success',
            hiddenCardIndexes: [...hiddenCardIndexes, currentOptionIndex],
            correctWithFirstTryQty: mistakeQty === 0 ? correctWithFirstTryQty + 1 : correctWithFirstTryQty,
            correctWithSecondTryQty: mistakeQty === 1 ? correctWithSecondTryQty + 1 : correctWithSecondTryQty
        });

        setGameTimeout(() => updateFieldCB(), 1000);
    };

    const userGivenWrongAnswer = () => {
        changeGPDOnline({
            answerStatus: 'error',
            mistakeQty: mistakeQty + 1,
            errorCardIndexes: [...errorCardIndexes, currentOptionIndex]
        });

        setGameTimeout(() => {
            changeGPDOnline({answerStatus: ''});
            mistakeQty >= 1 && updateFieldCB();
        }, 1000);
    };

    isCorrectAnswer ? userGivenCorrectAnswer() : userGivenWrongAnswer();
};