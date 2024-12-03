import {ProgressPercentCB} from '@custom-types/game';
import {StorytellerGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<StorytellerGameT> = ({
    gamePlayData,
}) => {
    const {isCompleted} = gamePlayData;

    return isCompleted ? 100 : 0;
};
