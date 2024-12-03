import {GetFinModalIndicators} from '@custom-types';
import {LevitationGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<LevitationGameT> = ({gamePlayData}) => (
    {rightAnswersQty: gamePlayData.correctAnswerWithFirstTry + gamePlayData.correctAnswerWithSecondTry}
);