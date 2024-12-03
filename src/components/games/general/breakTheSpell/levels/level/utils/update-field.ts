import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {updateFieldT} from '../type';

export const updateField:updateFieldT = (props) => {
    const {answersQty, changeGPDOnline, initFinishPlaying, currentWordIndex} = props;

    changeGPDOnline({isFieldUpdated: true});

    setGameTimeout(() => {
        answersQty === currentWordIndex + 1 ? initFinishPlaying() : changeGPDOnline({
            currentWordIndex: currentWordIndex + 1,
            mistakeQty: 0,
            selectionType: '',
            typedWord: [],
            missingLetters: [],
            emptyPartIndexes: [],
            isFieldUpdated: false
        });
    }, 500);
};