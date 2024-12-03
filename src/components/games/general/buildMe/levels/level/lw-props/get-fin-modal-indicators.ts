import {GetFinModalIndicators} from '@custom-types';
import {BuildMeGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<BuildMeGameT> = ({gamePlayData}) => {
    const {
        successAnswerWithFirstTimeQty,
        successAnswerWithSecondTimeQty,
    } = gamePlayData;

    return {
        rightAnswersQty: successAnswerWithFirstTimeQty + successAnswerWithSecondTimeQty
    };
};