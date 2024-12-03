import {StarsRequirementsCb} from '@custom-types/game';
import {GrammarTimeGameL1T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<GrammarTimeGameL1T> = ({
    gameSettings,
}) => {
    const {answersQty} = gameSettings;

    return [
        {
            maxErrors: Math.floor(answersQty * 0.1),
        },
        {
            maxErrors: Math.floor(answersQty * 0.3),
        },
        {
            maxErrors: Math.floor(answersQty * 0.5),
        },
    ];
};
