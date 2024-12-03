import {GetFinModalIndicators} from '@custom-types';
import {ClickItEasyGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<ClickItEasyGameT> = ({gamePlayData}) => ({
    rightAnswersQty: gamePlayData.answerQty
});