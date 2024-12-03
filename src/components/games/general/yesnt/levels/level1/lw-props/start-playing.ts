import {StartPlayingCB} from '@custom-types/game';
import {YesntGameT} from '../../../type';

export const startPlaying:StartPlayingCB<YesntGameT> = () => ({
    correctAnswersQty: 0,
    currentQ: 0,
    userAnswer: false,
    isCorrect: false,
    highlight: null,
    isCheckBtnDisabled: true,
    isTaskBtnDisabled: false,
    chosenBtn: null,
});
