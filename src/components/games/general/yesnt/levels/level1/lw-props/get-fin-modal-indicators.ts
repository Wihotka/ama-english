import {GetFinModalIndicators} from '@custom-types/game';
import {YesntGameT} from '../../../type';

export const getFinModalIndicators:GetFinModalIndicators<YesntGameT> = ({
    gamePlayData,
}) => {
    const {correctAnswersQty} = gamePlayData;

    return {
        rightAnswersQty: correctAnswersQty,
    };
};
