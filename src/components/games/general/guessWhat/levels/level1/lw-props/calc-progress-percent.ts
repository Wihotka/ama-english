import {ProgressPercentCB} from '@custom-types/game';
import {GuessWhatGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<GuessWhatGameT> = ({
    gameSettings,
    gamePlayData,
}) => {
    const {answersQty} = gameSettings;
    const {firstTryCorrectAnswersQty, secondTryCorrectAnswersQty}
        = gamePlayData;

    return (
        ((firstTryCorrectAnswersQty + secondTryCorrectAnswersQty / 2) * 100)
        / answersQty
    );
};
