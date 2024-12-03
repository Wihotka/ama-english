import {ProgressPercentCB} from '@custom-types';
import {WordpadGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<WordpadGameT> = ({gamePlayData, gameSettings}) =>
    (gamePlayData.firstTryCorrectAnswerQty + gamePlayData.secondTryCorrectAnswerQty / 2) * 100 / gameSettings.answersQty;