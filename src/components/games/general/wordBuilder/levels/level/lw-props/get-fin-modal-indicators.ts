import {GetFinModalIndicators} from '@custom-types';
import {WordBuilderGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<WordBuilderGameT> = ({gamePlayData}) => {
    const {
        successAnswerWithFirstTimeQty,
        successAnswerWithSecondTimeQty,
    } = gamePlayData;

    return {
        rightAnswersQty: successAnswerWithFirstTimeQty + successAnswerWithSecondTimeQty
    };
};