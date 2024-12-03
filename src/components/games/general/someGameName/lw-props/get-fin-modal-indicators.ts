import {GetFinModalIndicators} from '@custom-types';
import {SomeGameNameGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<SomeGameNameGameT> = ({gameData}) => {
    const {answersQty} = gameData;

    return {rightAnswersQty: answersQty};
};