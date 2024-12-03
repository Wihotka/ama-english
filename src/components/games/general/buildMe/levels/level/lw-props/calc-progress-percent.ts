import {ProgressPercentCB} from '@custom-types';
import {BuildMeGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<BuildMeGameT> = ({gamePlayData, gameData}) => {
    const {
        successAnswerWithFirstTimeQty,
        successAnswerWithSecondTimeQty
    } = gamePlayData;
    const {answersQty} = gameData;

    return ((successAnswerWithFirstTimeQty + successAnswerWithSecondTimeQty / 2) * 100) / answersQty;
};