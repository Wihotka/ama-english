import {ProgressPercentCB} from '@custom-types/game';
import {SecretCodeGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<SecretCodeGameT> = ({
    gameData,
    gamePlayData,
}) => {
    const {correctAnswersQty} = gamePlayData;
    const {words} = gameData;

    if (!correctAnswersQty) return 0;

    const percent = Math.ceil(100 * (correctAnswersQty / words.length));

    return percent;
};
