import {ProgressPercentCB} from '@custom-types';
import {BreakTheSpellGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<BreakTheSpellGameT> = ({gamePlayData, gameSettings}) =>
    (gamePlayData.firstTryCorrectAnswerQty + gamePlayData.secondTryCorrectAnswerQty / 2) * 100 / gameSettings.answersQty;