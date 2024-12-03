import {ProgressPercentCB} from '@custom-types/game';
import {ColourfulPhoneticsGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<
    ColourfulPhoneticsGameT
> = ({gamePlayData, gameData}) => {
    const {wrongAnswersQty, correctAnswersQty} = gamePlayData;
    const {correctColors, totalAnswers} = gameData;
    const numberOfAnswers = totalAnswers || correctColors.length;
    const getPercent = (total:number, n:number) =>
        (total / numberOfAnswers) * n;

    return wrongAnswersQty < 3
        ? getPercent(100, correctAnswersQty)
        : wrongAnswersQty < 5
            ? getPercent(66, correctAnswersQty)
            : wrongAnswersQty < 7
                ? getPercent(33, correctAnswersQty)
                : 0;
};
