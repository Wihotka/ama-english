import {GetFinModalIndicators} from '@custom-types/game';
import {GrammarTimeGameL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<GrammarTimeGameL1T> = ({
    gamePlayData,
}) => {
    const {correctAnswersQty} = gamePlayData;

    return {
        rightAnswersQty: correctAnswersQty,
    };
};
