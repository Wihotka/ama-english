import {GetFinModalIndicators} from '@custom-types';
import {PerfectPairsL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<PerfectPairsL1T> = ({gamePlayData}) => {
    const {correctAnswerQty} = gamePlayData;

    return {rightAnswersQty: correctAnswerQty};
};
