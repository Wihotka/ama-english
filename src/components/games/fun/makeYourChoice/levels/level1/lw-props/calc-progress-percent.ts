import {ProgressPercentCB} from '@custom-types/game';
import {clamp} from 'lodash';
import {MakeYourChoiceGameT} from '../../../type';

export const calcProgressPercent:ProgressPercentCB<MakeYourChoiceGameT> = ({
    gamePlayData,
}) => {
    const {correctAnswersQty} = gamePlayData;

    return clamp((correctAnswersQty / 15) * 100, 0, 100);
};
