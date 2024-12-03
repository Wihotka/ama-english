import {ProgressPercentCB} from '@custom-types/game';
import {TextTeaserGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<TextTeaserGameT> = ({
    gameData,
    gamePlayData,
    status
}) => {
    const {maxMistakesQty} = gameData;
    const {mistakesQty, rightAnswersQty} = gamePlayData;
    const {isFinishPlaying} = status;

    if (isFinishPlaying && rightAnswersQty < 1) return 0;

    return mistakesQty > 0
        ? (100 / maxMistakesQty) * (maxMistakesQty - mistakesQty)
        : 100;
};
