import {StartPlayingCB} from '@custom-types';
import {GuessTheSoundGameL1T} from '../type';

export const startPlaying:StartPlayingCB<GuessTheSoundGameL1T> = () => ({
    correctAnswerQty: {firstTry: 0, secondTry: 0},
    mistakeQte: 0,
    attemptsQte: 0,
    iteration: 0,
    numberOptions: 0,

    selectedVariant: {answer: null, isCorrect: null},

    isVoicePlay: {
        transcription: null,
        isPlay: false,
        typeCallField: null
    },
    isAnimated: false,
    isFieldUpdate: false,
    isActiveVerification: false
});
