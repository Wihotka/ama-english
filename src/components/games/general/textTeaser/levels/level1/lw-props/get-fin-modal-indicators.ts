import {GetFinModalIndicators} from '@custom-types/game';
import {TextTeaserGameT} from '../../../type';

export const getFinModalIndicators:GetFinModalIndicators<TextTeaserGameT> = ({
    gamePlayData,
}) => {
    const {rightAnswersQty} = gamePlayData;

    return {
        rightAnswersQty
    };
};
