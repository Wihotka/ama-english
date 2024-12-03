import {useEffect, useRef} from 'react';

import {useMissedLetterT} from '../type';

export const useMissedLetter:useMissedLetterT = (props) => {
    const {typedWord, missingLetters, emptyPartIndexes, changeGPDOnline} = props;
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (!firstUpdate.current) {
            const newTypedWord = [];

            for (let i = 0, counter = 0; i < typedWord.length; i++) {
                if (emptyPartIndexes.includes(i)) {
                    newTypedWord.push(missingLetters[counter] ?? '  ');
                    counter++;
                } else {
                    newTypedWord.push(typedWord[i]);
                }
            }

            changeGPDOnline({typedWord: newTypedWord});
        }

        firstUpdate.current = false;
    }, [missingLetters]);
};