import {ProgressPercentCB} from '@custom-types';
import {PerfectPairsL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<PerfectPairsL1T> = ({gamePlayData, gameSettings}) => {
    const {answersQty} = gameSettings;
    const {correctAnswerQty} = gamePlayData;

    return (correctAnswerQty * 100) / answersQty;
};
