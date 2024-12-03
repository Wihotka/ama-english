import {ProgressPercentCB} from '@custom-types';
import {LevitationGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<LevitationGameT> = ({gamePlayData, gameSettings}) =>
    ((gamePlayData.correctAnswerWithFirstTry + gamePlayData.correctAnswerWithSecondTry / 2) * 100) / gameSettings.answersQty;