import {xor, shuffle} from 'lodash';

import {deleteExtraKeysT} from '../type';

export const deleteExtraKeys:deleteExtraKeysT = (props) => {
    const {words, currentLetterIndex, currentWordIndex, removedKeys, keyboard, timeForRemoveKey, changeGPDOnline} = props;
    const rightLetter = words[currentWordIndex].word[currentLetterIndex];
    const wrongLetters = keyboard.filter(letter => letter !== rightLetter);

    changeGPDOnline({
        removedKeys: [...removedKeys, ...shuffle(xor(removedKeys, wrongLetters)).splice(0, 3)],
        timeForRemoveKey: removedKeys.length < 24 ? timeForRemoveKey - 20 : timeForRemoveKey
    });
};