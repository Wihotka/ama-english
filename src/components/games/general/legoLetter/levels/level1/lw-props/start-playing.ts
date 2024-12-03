import {StartPlayingCB} from '@custom-types';
import {LegoLetterGameL1T} from '../type';

export const startPlaying:StartPlayingCB<LegoLetterGameL1T> = () => ({
    iteration: 0,
    selectedIndexes: [],
    correctAnswersQty: 0,
    currentAnswer: null,
    mistakesPerAnswerQty: 0,
});
