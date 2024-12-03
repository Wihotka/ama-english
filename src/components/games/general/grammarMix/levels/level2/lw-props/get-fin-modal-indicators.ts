import {GetFinModalIndicators} from '@custom-types';
import {GrammarMixGameT2} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<GrammarMixGameT2> = ({gamePlayData}) => {
    const {correctAnswerQty} = gamePlayData;

    return {rightAnswersQty: correctAnswerQty.firstTry + correctAnswerQty.secondTry};
};