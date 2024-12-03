import {ProgressPercentCB} from '@custom-types';
import {ClickItEasyGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<ClickItEasyGameT> = ({gamePlayData, gameSettings}) =>
    (gamePlayData.answerQty * 100) / gameSettings.answersQty;