import {GetFinModalIndicators} from '@custom-types';
import {WordBoxGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<WordBoxGameT> = ({gamePlayData}) => {
    const {foundWords} = gamePlayData;

    return {rightAnswersQty: foundWords.length};
};
