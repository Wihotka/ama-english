import {GetFinModalIndicators} from '@custom-types';
import {PhraseJumpingGameT} from './../type';

export const getFinModalIndicators:GetFinModalIndicators<PhraseJumpingGameT> = ({gamePlayData}) => {
    const {correctAnswerQty} = gamePlayData;

    return {rightAnswersQty: correctAnswerQty.firstTry + correctAnswerQty.secondTry};
};