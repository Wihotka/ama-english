import {timeResolver} from '../../../config';

import {ProgressPercentCB} from '@custom-types';
import {AlphabetGameL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<AlphabetGameL1T> = ({gameSettings, gamePlayData, status}) => {
    const {mode} = gameSettings;
    const {isFinishPlaying} = status;
    const {currentIndex, userTime} = gamePlayData;

    if (isFinishPlaying && currentIndex !== 25) {
        return -1;
    }

    if (userTime < timeResolver[mode][0]) {
        return 100;
    } else if (userTime < timeResolver[mode][1]) {
        return 70;
    } else if (userTime < timeResolver[mode][2]) {
        return 50;
    }

    return 0;
};
