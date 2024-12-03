import {ProgressPercentCB} from '@custom-types/game';
import {GrammarTimeGameL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<GrammarTimeGameL1T> = ({
    gamePlayData,
    gameSettings
}) => {
    const {answersQty} = gameSettings;
    const {correctAnswersQty} = gamePlayData;

    return (correctAnswersQty * 100) / answersQty;
};
