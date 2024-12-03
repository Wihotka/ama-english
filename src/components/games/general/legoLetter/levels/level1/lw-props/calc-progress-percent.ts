import {ProgressPercentCB} from '@custom-types';
import {LegoLetterGameL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<LegoLetterGameL1T> = ({gamePlayData, gameData}) => {
    const {data} = gameData;
    const {correctAnswersQty} = gamePlayData;

    return correctAnswersQty / data.length * 100;
};
