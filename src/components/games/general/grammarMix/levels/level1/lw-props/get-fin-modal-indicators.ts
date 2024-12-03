import {GetFinModalIndicators} from '@custom-types';
import {GrammarMixGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<GrammarMixGameT> = ({gamePlayData}) => {
    const {correctAnswerQty} = gamePlayData;

    return {rightAnswersQty: correctAnswerQty};
};