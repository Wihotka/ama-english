import {ProgressPercentCB} from '@custom-types';
import {ClickItEasyGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<ClickItEasyGameT> = ({gamePlayData, gameSettings}) =>
    (gamePlayData.firstTryCorrectAnswerQty + gamePlayData.secondTryCorrectAnswerQty / 2) * 100 / gameSettings.answersQty;