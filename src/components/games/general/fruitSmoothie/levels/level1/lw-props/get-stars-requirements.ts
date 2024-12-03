import {StarsRequirementsCb} from '@custom-types';
import {FruitSmoothieL1T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<FruitSmoothieL1T> = ({gameSettings}) => {
    const {answersQty, level} = gameSettings;

    return level !== 1
        ? []
        : [{
            maxErrors: Math.round(answersQty * .1)
        }, {
            maxErrors: Math.round(answersQty * .3)
        }, {
            maxErrors: Math.round(answersQty * .5)
        }];
};