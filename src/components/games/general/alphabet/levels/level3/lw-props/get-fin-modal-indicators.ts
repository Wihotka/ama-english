import {GetFinModalIndicators} from '@custom-types';
import {AlphabetGameL3T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<AlphabetGameL3T> = ({gamePlayData}) => {
    const {correctAnswersQty} = gamePlayData;

    return {rightAnswersQty: correctAnswersQty};
};
