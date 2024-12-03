import {ProgressPercentCB} from '@custom-types/game';
import {SortOutGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<SortOutGameT> = ({
    gamePlayData,
    gameSettings
}) => {
    const {correctAnswersQty} = gamePlayData;
    const {answersQty} = gameSettings;

    return (correctAnswersQty / answersQty) * 100;
};
