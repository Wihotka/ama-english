import {ProgressPercentCB} from '@custom-types';
import {WordSaladGameT} from '../type';

export const calcProgressPercent:ProgressPercentCB<WordSaladGameT> = ({gamePlayData}) => {
    const {selectedWords} = gamePlayData;

    return selectedWords?.length > 0 ? 100 : 0;
};
