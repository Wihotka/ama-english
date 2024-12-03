import {GetFinModalIndicators} from '@custom-types';
import {AlphabetGameL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<AlphabetGameL1T> = ({gamePlayData}) => {
    const {currentIndex} = gamePlayData;

    return {rightAnswersQty: currentIndex};
};
