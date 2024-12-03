import {ProgressPercentCB} from '@custom-types/game';
import {GrammarTimeGameL2T} from '../type';

export const calcProgressPercent:ProgressPercentCB<GrammarTimeGameL2T> = ({
    gamePlayData,
    gameSettings,
}) => {
    const {answersQty} = gameSettings;
    const {firstTryCorrectAnswersQty, secondTryCorrectAnswersQty}
        = gamePlayData;

    return (
        ((firstTryCorrectAnswersQty + secondTryCorrectAnswersQty / 2) * 100)
        / answersQty
    );
};
