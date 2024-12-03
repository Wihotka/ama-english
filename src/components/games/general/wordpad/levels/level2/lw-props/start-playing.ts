import {StartPlayingCB} from '@custom-types';
import {selections, WordpadGameT} from '../type';

export const startPlaying:StartPlayingCB<WordpadGameT> = ({gameData}) => ({
    currentWordIndex: 0,
    currentLetterIndex: 0,

    timer: gameData.startTimer,
    timeForRemoveKey: gameData.startTimer - 50,
    answerQty: 0,

    selectionType: selections.none,
    pressedKey: '',

    typedWord: [],
    removedKeys: [],

    isKeyPressed: false,
    isTimerBegan: false,
    isFieldUpdated: false,
    isPlayButtonPressed: false
});