import {StartPlayingCB} from '@custom-types';
import {AlphabetGameL1T} from '../type';

export const startPlaying:StartPlayingCB<AlphabetGameL1T> = () => ({
    currentIndex: 0,
    mistakeIndex: null,
    userTime: 0
});
