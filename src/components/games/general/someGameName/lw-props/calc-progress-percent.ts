import {ProgressPercentCB} from '@custom-types';
import {SomeGameNameGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<SomeGameNameGameT> = ({gamePlayData, gameData, status}) => {
    const {answersQty} = gameData;
    const {clicksQty} = gamePlayData;
    const {isFinishPlaying} = status;

    if (isFinishPlaying) return 0;

    return clicksQty * 100 / answersQty;
};