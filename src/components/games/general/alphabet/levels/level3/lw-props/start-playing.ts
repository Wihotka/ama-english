import {StartPlayingCB} from '@custom-types';
import {AlphabetGameL3T} from '../type';

export const startPlaying:StartPlayingCB<AlphabetGameL3T> = () => ({
    currentIndex: 0,
    mistakeIndex: null,
    iteration: 0,
    wrongAnswersQty: 0,
    correctAnswersQty: 0
});
