import {StartPlayingCB} from '@custom-types';
import {ClickItEasyGameT} from '../type';

export const startPlaying:StartPlayingCB<ClickItEasyGameT> = ({gameData}) => ({
    timer: gameData.startTimer,
    answerQty: 0,
    mistakeQty: 0,
    pressedKeyIndex: -1,
    currentSentenceIndex: 0,

    selectionType: '',

    typedSentence: [],

    isFieldUpdated: false,
});