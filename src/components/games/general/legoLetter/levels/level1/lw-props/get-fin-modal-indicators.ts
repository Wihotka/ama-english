import {GetFinModalIndicators} from '@custom-types';
import {LegoLetterGameL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<LegoLetterGameL1T> = ({gamePlayData}) => {
    const {correctAnswersQty} = gamePlayData;

    return {rightAnswersQty: correctAnswersQty};
};
