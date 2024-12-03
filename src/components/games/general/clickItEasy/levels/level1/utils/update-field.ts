import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {updateFieldT} from '../type';

export const updateField:updateFieldT = (props) => {
    const {answersQty, changeGPDOnline, initFinishPlaying, currentSentenceIndex} = props;

    const fieldUpdating = () => {
        changeGPDOnline({isFieldUpdated: true});

        setGameTimeout(() => {
            changeGPDOnline({
                currentSentenceIndex: currentSentenceIndex + 1
            });
        }, 300);

        setGameTimeout(() => {
            changeGPDOnline({
                mistakeQty: 0,
                missingWords: [],
                typedSentence: [],
                selectionType: '',
                emptyPartIndexes: [],
                isFieldUpdated: false
            });
        }, 700);
    };

    answersQty === currentSentenceIndex + 1 ? initFinishPlaying() : fieldUpdating();
};