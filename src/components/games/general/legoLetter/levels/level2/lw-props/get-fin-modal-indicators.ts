import {GetFinModalIndicators} from '@custom-types';
import {LegoLetterGameL2T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<LegoLetterGameL2T> = ({gamePlayData}) => {
    const {correctAnswersQty} = gamePlayData;

    return {rightAnswersQty: correctAnswersQty};
};
