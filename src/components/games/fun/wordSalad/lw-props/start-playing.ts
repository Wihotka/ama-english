import {StartPlayingCB} from '@custom-types';
import {WordSaladGameT} from '../type';

export const startPlaying:StartPlayingCB<WordSaladGameT> = () => ({
    selectedWords: [],
    inputIndexes: [],
    letters: [],
    answerStatus: null,
    gameIsActive: false
});
