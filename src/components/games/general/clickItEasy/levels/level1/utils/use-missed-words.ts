import {useEffect, useRef} from 'react';

import {useMissedWordsT} from '../type';

export const useMissedWords:useMissedWordsT = (props) => {
    const {typedSentence, missingWords, emptyPartIndexes, changeGPDOnline} = props;
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (!firstUpdate.current) {
            const newTypedSentence:any = [];

            for (let i = 0, counter = 0; i < typedSentence.length; i++) {
                if (emptyPartIndexes.includes(i)) {
                    newTypedSentence.push(missingWords[counter]);
                    counter++;
                } else {
                    newTypedSentence.push(typedSentence[i]);
                }
            }

            changeGPDOnline({typedSentence: newTypedSentence});
        }

        firstUpdate.current = false;
    }, [missingWords]);
};