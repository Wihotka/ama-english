import {GetFinModalIndicators} from '@custom-types';
import {GuessTheSoundGameL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<GuessTheSoundGameL1T> = ({gamePlayData}) => {
    const {correctAnswerQty} = gamePlayData;

    return {rightAnswersQty: correctAnswerQty.firstTry + correctAnswerQty.secondTry};
};
