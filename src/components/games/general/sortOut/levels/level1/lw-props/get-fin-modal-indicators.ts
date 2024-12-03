import {GetFinModalIndicators} from '@custom-types/game';
import {SortOutGameT} from '../../../type';

export const getFinModalIndicators:GetFinModalIndicators<SortOutGameT> = ({
    gamePlayData,
}) => {
    const {correctAnswersQty} = gamePlayData;

    return {
        rightAnswersQty: correctAnswersQty,
    };
};
