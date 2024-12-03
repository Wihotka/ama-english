import {StartPlayingCB} from '@custom-types';
import {AirWordGameT} from '../type';

export const startPlaying:StartPlayingCB<AirWordGameT> = ({gameSettings}) => ({
    timer: +gameSettings.speedInSeconds,
    mistakeQty: 0,
    userAnswerQty: 0,
    currentWordsIndex: 0,
    successWithFirstTry: 0,
    successWithSecondTry: 0,

    candidateWord: '',
    correctWordStatus: 'hidden',

    isFieldUpdate: false,
    isAnimate: true,
});
