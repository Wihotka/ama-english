import {StartPlayingCB} from '@custom-types';
import {WordpadGameT} from '../type';

export const startPlaying:StartPlayingCB<WordpadGameT> = ({}) => ({
    currentWordIndex: 0,

    mistakeQty: 0,
    firstTryCorrectAnswerQty: 0,
    secondTryCorrectAnswerQty: 0,

    selectionType: '',
    pressedKey: '',

    typedWord: [],
    missingLetters: [],
    emptyPartIndexes: [],

    isHintButtonPressed: false,
    isPlayButtonPressed: false,
    isFieldUpdated: false,
});