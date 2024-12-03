import {ProgressPercentCB} from '@custom-types';
import {GuessTheSoundGameL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<GuessTheSoundGameL1T> = ({gamePlayData, gameSettings}) => {
    const {answersQty} = gameSettings;
    const {firstTry, secondTry} = gamePlayData.correctAnswerQty;

    return ((firstTry + secondTry / 2) * 100) / answersQty;
};
