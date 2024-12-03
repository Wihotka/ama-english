import {ProgressPercentCB} from '@custom-types';
import {EchoChamberGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<EchoChamberGameT> = ({gameSettings, gamePlayData}) =>
    gamePlayData.currentSentenceIndex / gameSettings.answersQty * 100;