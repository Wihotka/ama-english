import {StartPlayingCB} from '@custom-types';
import {BreakTheSpellGameT} from '../type';

export const startPlaying:StartPlayingCB<BreakTheSpellGameT> = () => ({
    currentWordIndex: 0,

    mistakeQty: 0,
    firstTryCorrectAnswerQty: 0,
    secondTryCorrectAnswerQty: 0,

    selectionType: '',
    pressedKey: '',

    typedWord: [],
    missingLetters: [],
    emptyPartIndexes: [],

    isPlayButtonPressed: false,
    isFieldUpdated: false,
});