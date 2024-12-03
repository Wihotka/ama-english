import {GetFinModalIndicators} from '@custom-types';
import {ClickItEasyGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<ClickItEasyGameT> = ({gamePlayData}) => (
    {rightAnswersQty: gamePlayData.firstTryCorrectAnswerQty + gamePlayData.secondTryCorrectAnswerQty}
);