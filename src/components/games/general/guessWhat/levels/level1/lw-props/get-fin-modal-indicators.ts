import {GetFinModalIndicators} from '@custom-types/game';
import {GuessWhatGameT} from '../../../type';

export const getFinModalIndicators:GetFinModalIndicators<GuessWhatGameT> = ({
    gamePlayData,
}) => {
    const {firstTryCorrectAnswersQty, secondTryCorrectAnswersQty}
        = gamePlayData;

    return {
        rightAnswersQty: firstTryCorrectAnswersQty + secondTryCorrectAnswersQty,
    };
};
