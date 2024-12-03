import {GetFinModalIndicators} from '@custom-types';
import {TimelineGameL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<TimelineGameL1T> = ({gamePlayData}) => {
    const {correctAnswerQty} = gamePlayData;

    return {rightAnswersQty: correctAnswerQty};
};
