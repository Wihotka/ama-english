import {GetFinModalIndicators} from '@custom-types';
import {FruitSmoothieL1T} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<FruitSmoothieL1T> = ({gamePlayData}) => {
    const {first, second} = gamePlayData.correctQty;

    return {rightAnswersQty: first + second};
};
