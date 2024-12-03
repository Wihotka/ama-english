import {ProgressPercentCB} from '@custom-types';
import {TimelineGameL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<TimelineGameL1T> = ({gamePlayData, gameSettings}) => {
    const {answersQty} = gameSettings;
    const {correctAnswerQty} = gamePlayData;

    return (correctAnswerQty * 100) / answersQty;
};
