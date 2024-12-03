import {GetFinModalIndicators} from '@custom-types/game';
import {MakeYourChoiceGameT} from '../../../type';

export const getFinModalIndicators:GetFinModalIndicators<MakeYourChoiceGameT> = ({
    gamePlayData,
}) => {
    const {correctAnswersQty, score} = gamePlayData;

    return {
        rightAnswersQty: correctAnswersQty,
        pointsQty: score
    };
};
