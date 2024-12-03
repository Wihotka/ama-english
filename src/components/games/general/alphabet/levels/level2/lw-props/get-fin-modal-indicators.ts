import {GetFinModalIndicators} from '@custom-types';
import {AlphabetGameL2T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<AlphabetGameL2T> = ({gamePlayData}) => {
    const {correctAnswersQty} = gamePlayData;

    return {
        rightAnswersQty: correctAnswersQty
    };
};
