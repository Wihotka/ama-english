import {StartPlayingCB} from '@custom-types';
import {AlphabetGameL2T} from '../type';

export const startPlaying:StartPlayingCB<AlphabetGameL2T> = () => ({
    userAnswers: [],
    wrongAnswersQty: 0,
    correctAnswersPerIteration: 0,
    iteration: 1,
    correctAnswersQty: 0,
    isAnimated: false,
    currentMistakeId: null
});
