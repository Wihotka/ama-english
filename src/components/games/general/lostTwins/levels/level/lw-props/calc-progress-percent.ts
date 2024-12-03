import {timeResolver} from './../../../config';

import {ProgressPercentCB} from '@custom-types';
import {LostTwinsGameL1T} from '../type';

export const calcProgressPercent:ProgressPercentCB<LostTwinsGameL1T> = ({gameSettings, gamePlayData, status}) => {
    const {secondsNowGame, cards} = gamePlayData;
    const {isFinishPlaying} = status;
    const {level, mode} = gameSettings;

    if (isFinishPlaying && !cards.every(card => card.isHidden)) {
        return -1;
    }

    if (secondsNowGame < timeResolver[level][mode][0]) {
        return 100;
    } else if (secondsNowGame < timeResolver[level][mode][1]) {
        return 80;
    } else if (secondsNowGame < timeResolver[level][mode][2]) {
        return 60;
    }

    return 0;

};
