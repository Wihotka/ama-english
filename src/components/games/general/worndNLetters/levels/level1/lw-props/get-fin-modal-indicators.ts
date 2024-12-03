import {GetFinModalIndicators} from '@custom-types';
import {WorndNLettersGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<WorndNLettersGameT> = ({gamePlayData}) => {
    const {correctAnswersQty} = gamePlayData;

    return {rightAnswersQty: correctAnswersQty};
};
