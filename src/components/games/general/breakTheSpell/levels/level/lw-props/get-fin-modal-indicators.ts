import {GetFinModalIndicators} from '@custom-types';
import {BreakTheSpellGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<BreakTheSpellGameT> = ({gamePlayData}) => (
    {rightAnswersQty: gamePlayData.firstTryCorrectAnswerQty + gamePlayData.secondTryCorrectAnswerQty}
);