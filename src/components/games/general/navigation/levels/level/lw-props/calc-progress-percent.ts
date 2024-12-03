import {ProgressPercentCB} from '@custom-types';
import {NavigationGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<NavigationGameT> = ({gamePlayData, gameData}) =>
    100 / gameData.options.length * gamePlayData.answerQty;