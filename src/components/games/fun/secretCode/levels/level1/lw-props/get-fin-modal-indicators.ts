import {GetFinModalIndicators} from '@custom-types/game';
import {SecretCodeGameT} from '../../../type';

export const getFinModalIndicators:GetFinModalIndicators<SecretCodeGameT> = ({
    gamePlayData,
}) => {
    const {correctAnswersQty} = gamePlayData;

    return {
        rightAnswersQty: correctAnswersQty,
    };
};
