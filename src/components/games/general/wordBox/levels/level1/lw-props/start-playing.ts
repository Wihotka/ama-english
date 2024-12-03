import {StartPlayingCB} from '@custom-types';
import {WordBoxGameT} from '../type';

export const startPlaying:StartPlayingCB<WordBoxGameT> = () => ({
    userAnswers: [],
    foundWords: [],
    additionalWords: [],
    currentDirection: null,
    selectedCells: [],
    wrongAnswersQty: 0,
    answerStatus: null,
    hintIsActive: true,
});
