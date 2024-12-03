import {StartPlayingCB} from '@custom-types';
import {LegoLetterGameL2T} from '../type';

export const startPlaying:StartPlayingCB<LegoLetterGameL2T> = () => ({
    iteration: 0,
    correctAnswersQty: 0,
    mistakesPerAnswerQty: 0,
    answer: {letter: '', isCorrect: false},
    gameIsActive: true,
    isAnswerChecked: false
});
