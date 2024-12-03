import {StartPlayingCB} from '@custom-types';
import {CheckpointGameT} from '../type';

export const startPlaying:StartPlayingCB<CheckpointGameT> = () => ({
    answerQty: 0,
    mistakeQty: 0,
    mistakeCardIndex: NaN,
    currentOptionIndex: 0,
    correctWithFirstTryQty: 0,
    correctWithSecondTryQty: 0,

    inputValue: '',
    answerStatus: '',

    hiddenCardIndexes: [],
    errorCardIndexes: [],

    isModalShowed: false,
    isPlayButtonPressed: false
});
