import {GetFinModalIndicators} from '@custom-types/game';
import {GrammarTimeGameL2T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<GrammarTimeGameL2T> = ({
    gamePlayData,
}) => {
    const {firstTryCorrectAnswersQty, secondTryCorrectAnswersQty} = gamePlayData;

    return {
        rightAnswersQty: firstTryCorrectAnswersQty + secondTryCorrectAnswersQty,
    };
};
