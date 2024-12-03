import {GetFinModalIndicators} from '@custom-types';
import {ItsMatchGameL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<ItsMatchGameL1T> = ({gamePlayData}) => {
    const {correctAnswerQty} = gamePlayData;

    return {rightAnswersQty: correctAnswerQty};
};
