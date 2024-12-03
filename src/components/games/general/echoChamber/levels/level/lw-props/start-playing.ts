import {StartPlayingCB} from '@custom-types';
import {EchoChamberGameT, soundMode} from '../type';

export const startPlaying:StartPlayingCB<EchoChamberGameT> = () => ({
    timer: 10,
    currentSentenceIndex: 0,

    mode: soundMode.empty,

    isSoundPlaying: false,
    isDetailsShowed: false,
    isMandatoryTime: true
});
