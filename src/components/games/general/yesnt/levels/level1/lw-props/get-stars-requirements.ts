import {StarsRequirementsCb} from '@custom-types/game';
import {YesntGameT} from '../../../type';

export const getStarsRequirements:StarsRequirementsCb<YesntGameT> = ({gameSettings}) => {
    const {answersQty} = gameSettings;

    return [{
        maxErrors: Math.floor(answersQty * .1)
    }, {
        maxErrors: Math.floor(answersQty * .3)
    }, {
        maxErrors: Math.floor(answersQty * .5)
    }];
};
