import {StarsRequirementsCb} from '@custom-types';
import {TimelineGameL1T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<TimelineGameL1T> = ({gameData}) => {
    const {answersQty} = gameData;

    return [{
        maxErrors: Math.round(answersQty * .1)
    }, {
        maxErrors: Math.round(answersQty * .3)
    }, {
        maxErrors: Math.round(answersQty * .5)
    }];
};