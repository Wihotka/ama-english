import {ProgressPercentCB} from '@custom-types';
import {AlphabetGameL3T} from '../type';

export const calcProgressPercent:ProgressPercentCB<AlphabetGameL3T> = ({gamePlayData, gameSettings, status}) => {
    const {wrongAnswersQty, correctAnswersQty} = gamePlayData;
    const {lettersQty} = gameSettings;
    const {isFinishPlaying} = status;

    if (isFinishPlaying && correctAnswersQty < (lettersQty * 3)) {
        return 0;
    }

    return 100 - (wrongAnswersQty / (lettersQty * 3) * 100);
};
