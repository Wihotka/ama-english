import {ProgressPercentCB} from '@custom-types';
import {WordpadGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<WordpadGameT> = ({gamePlayData, gameSettings}) =>
    (gamePlayData.answerQty * 100) / gameSettings.answersQty;