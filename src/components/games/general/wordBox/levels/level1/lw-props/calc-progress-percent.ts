import {ProgressPercentCB} from '@custom-types';
import {WordBoxGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<WordBoxGameT> = ({gamePlayData, status, gameSettings}) => {
    const {wrongAnswersQty, foundWords} = gamePlayData;
    const {wordsQty} = gameSettings;
    const {isFinishPlaying} = status;

    if (isFinishPlaying && foundWords.length < wordsQty) {
        return 0;
    }

    return 100 - wrongAnswersQty * 33;
};
