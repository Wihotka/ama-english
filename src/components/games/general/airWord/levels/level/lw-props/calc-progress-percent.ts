import {ProgressPercentCB} from '@custom-types';
import {AirWordGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<AirWordGameT> = ({gamePlayData, gameSettings}) =>
    ((gamePlayData.successWithFirstTry + gamePlayData.successWithSecondTry / 2) * 100) / gameSettings.answersQty;