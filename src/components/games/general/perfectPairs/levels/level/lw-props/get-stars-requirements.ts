import {StarsRequirementsCb} from '@custom-types';
import {PerfectPairsL1T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<PerfectPairsL1T> = ({gameData}) => {
    const {answersQty} = gameData;

    return [{
        maxErrors: Math.round(answersQty * .1)
    }, {
        maxErrors: Math.round(answersQty * .3)
    }, {
        maxErrors: Math.round(answersQty * .5)
    }];
};