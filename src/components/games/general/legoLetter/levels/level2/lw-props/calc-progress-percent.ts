import {ProgressPercentCB} from '@custom-types';
import {LegoLetterGameL2T} from '../type';

export const calcProgressPercent:ProgressPercentCB<LegoLetterGameL2T> = ({gamePlayData, gameData}) => {
    const {correctAnswersQty} = gamePlayData;
    const {data} = gameData;

    return correctAnswersQty / data.length * 100;
};
