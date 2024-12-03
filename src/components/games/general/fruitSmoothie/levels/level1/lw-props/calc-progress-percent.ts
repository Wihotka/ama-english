import {ProgressPercentCB} from '@custom-types';
import {FruitSmoothieL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<FruitSmoothieL1T> = ({gamePlayData, gameSettings}) => {
    const {second, first} = gamePlayData.correctQty;
    const {answersQty} = gameSettings;

    return ((first + second / 2) * 100) / answersQty;
};
