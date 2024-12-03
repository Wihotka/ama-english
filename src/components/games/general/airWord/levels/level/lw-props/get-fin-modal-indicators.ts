import {GetFinModalIndicators} from '@custom-types';
import {AirWordGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<AirWordGameT> = ({gamePlayData}) => ({
    rightAnswersQty: gamePlayData.successWithFirstTry + gamePlayData.successWithSecondTry
});