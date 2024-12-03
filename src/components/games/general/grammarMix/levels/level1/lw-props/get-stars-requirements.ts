import {StarsRequirementsCb} from '@custom-types';
import {GrammarMixGameT} from './../type';

export const getStarsRequirements:StarsRequirementsCb<GrammarMixGameT> = ({gameSettings}) => {
    const {answersQty} = gameSettings;

    return [{
        maxErrors: Math.round(answersQty * .1)
    }, {
        maxErrors: Math.round(answersQty * .3)
    }, {
        maxErrors: Math.round(answersQty * .5)
    }];
};