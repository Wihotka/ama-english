import {GetFinModalIndicators} from '@custom-types';
import {WordpadGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<WordpadGameT> = ({gamePlayData}) => (
    {rightAnswersQty: gamePlayData.firstTryCorrectAnswerQty + gamePlayData.secondTryCorrectAnswerQty}
);