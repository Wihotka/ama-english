import {ProgressPercentCB} from '@custom-types';
import {WordBuilderGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<WordBuilderGameT> = ({gamePlayData, gameData}) => {
    const {
        successAnswerWithFirstTimeQty,
        successAnswerWithSecondTimeQty
    } = gamePlayData;
    const {answersQty} = gameData;

    return ((successAnswerWithFirstTimeQty + successAnswerWithSecondTimeQty / 2) * 100) / answersQty;
};