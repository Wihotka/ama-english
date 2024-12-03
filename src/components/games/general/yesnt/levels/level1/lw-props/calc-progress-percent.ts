import {ProgressPercentCB} from '@custom-types/game';
import {YesntGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<YesntGameT> = ({
    gamePlayData,
    gameSettings
}) => {
    const {correctAnswersQty} = gamePlayData;
    const {answersQty} = gameSettings;

    return (correctAnswersQty / answersQty) * 100;
};
