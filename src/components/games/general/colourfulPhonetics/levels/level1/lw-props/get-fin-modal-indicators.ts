import {GetFinModalIndicators} from '@custom-types/game';
import {ColourfulPhoneticsGameT} from '../../../type';

export const getFinModalIndicators:GetFinModalIndicators<ColourfulPhoneticsGameT> = ({
    gamePlayData,
}) => {
    const {correctAnswersQty} = gamePlayData;

    return {
        rightAnswersQty: correctAnswersQty,
    };
};
