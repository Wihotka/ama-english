import {ProgressPercentCB} from '@custom-types';
import {CheckpointGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<CheckpointGameT> = ({gamePlayData, gameData}) =>
    ((gamePlayData.correctWithFirstTryQty + gamePlayData.correctWithSecondTryQty / 2) * 100) / gameData.options.length;