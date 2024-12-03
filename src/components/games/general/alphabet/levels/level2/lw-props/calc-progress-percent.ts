import {ProgressPercentCB} from '@custom-types';
import {AlphabetGameL2T} from '../type';

export const calcProgressPercent:ProgressPercentCB<AlphabetGameL2T> = ({gamePlayData, gameData, status}) => {
    const {wrongAnswersQty, userAnswers, iteration} = gamePlayData;
    const {data} = gameData;
    const {isFinishPlaying} = status;

    if (isFinishPlaying && !data.every(({isCorrect, id}) => (id + 7 < iteration || isCorrect || (userAnswers.includes(id))))) {
        return 0;
    }

    return 100 - wrongAnswersQty * 20;
};
