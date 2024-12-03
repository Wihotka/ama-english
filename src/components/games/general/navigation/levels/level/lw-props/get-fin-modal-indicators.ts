import {GetFinModalIndicators} from '@custom-types';
import {NavigationGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<NavigationGameT> = ({gamePlayData}) => ({
    rightAnswersQty: gamePlayData.answerQty
});