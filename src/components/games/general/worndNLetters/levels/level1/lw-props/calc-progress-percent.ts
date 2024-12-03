import {ProgressPercentCB} from '@custom-types';
import {WorndNLettersGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<WorndNLettersGameT> = ({gamePlayData, gameSettings}) => {
    const {userScores} = gamePlayData;
    const {answersQty} = gameSettings;

    return (userScores * 100) / (answersQty * 2);
};
