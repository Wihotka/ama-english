import {StartPlayingCB} from '@custom-types';
import {PerfectPairsL1T, PerfectPairs_GamePlayData} from '../type';

export const startPlaying:StartPlayingCB<PerfectPairsL1T> = ():PerfectPairs_GamePlayData => ({
    correctAnswerQty: 0,
    mistakeQte: 0,
    iteration: 0,
    numberOptions: 0,

    selectedVariant: {answer: null, isCorrect: true},

    isActiveVerification: false,
    isAnimated: false,
    isFieldUpdate: false
});
