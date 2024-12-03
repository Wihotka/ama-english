import {StartPlayingCB} from '@custom-types/game';
import {GuessWhatGameT} from '../../../type';

export const startPlaying:StartPlayingCB<GuessWhatGameT> = () => ({
    firstTryCorrectAnswersQty: 0,
    secondTryCorrectAnswersQty: 0,
    currentQ: 0,
    isCorrect: false,
    highlight: false,
    userAnswer: '',
    mistakesQty: 0,
    isCheckBtnDisabled: true,
    isHintUsed: false,
    isFieldDisabled: false,
    hiddenAnswers: [],
});
