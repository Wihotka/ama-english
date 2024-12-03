import {ProgressPercentCB} from '@custom-types';
import {ItsMatchGameL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<ItsMatchGameL1T> = ({gamePlayData, gameSettings}) => {
    const {answersQty} = gameSettings;
    const {correctAnswerQty} = gamePlayData;

    return (correctAnswerQty * 100) / answersQty;
};
