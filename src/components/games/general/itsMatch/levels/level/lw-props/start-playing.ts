import {StartPlayingCB} from '@custom-types';
import {ItsMatchGameL1T, ItsMatch_GamePlayData} from '../type';

export const startPlaying:StartPlayingCB<ItsMatchGameL1T> = ():ItsMatch_GamePlayData => ({
    correctAnswerQty: 0,
    mistakeQte: 0,
    iteration: 0,
    numberOptions: 0,

    selectedVariant: {answer: null, isCorrect: true},

    isVoicePlay: {
        variant: null,
        isPlay: false,
        typeCallField: null
    },
    isActiveVerification: false,
    isAnimated: false,
    isFieldUpdate: false
});
