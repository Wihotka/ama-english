import {StartPlayingCB} from '@custom-types';
import {TimelineL1_GamePlayData, TimelineGameL1T} from '../type';

export const startPlaying:StartPlayingCB<TimelineGameL1T> = ():TimelineL1_GamePlayData => ({
    correctAnswerQty: 0,
    attemptsQte: 0,
    mistakeQte: 0,
    iteration: 0,
    numberOptions: 0,

    selectedVariant: {answer: null, isCorrect: null},

    isActiveVerification: false,
    isAnimated: false,
    isFieldUpdate: false
});
