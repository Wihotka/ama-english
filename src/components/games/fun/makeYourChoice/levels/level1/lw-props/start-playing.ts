import {StartPlayingCB} from '@custom-types/game';
import {MakeYourChoiceGameT} from '../../../type';

export const startPlaying:StartPlayingCB<MakeYourChoiceGameT> = () => ({
    currentQ: 0,
    pointsPerAnswer: 10,
    streak: 0,
    score: 0,
    highlight: false,
    isCorrectAnswer: false,
    correctAnswersQty: 0,
    btnIndex: -1,
    isAnswerBtnPressed: false,
});
