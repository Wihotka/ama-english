import {GetFinModalIndicators} from '@custom-types';
import {CheckpointGameT} from '../type';

export const getFinModalIndicators:GetFinModalIndicators<CheckpointGameT> = ({gamePlayData}) => ({
    rightAnswersQty: gamePlayData.correctWithFirstTryQty + gamePlayData.correctWithSecondTryQty});