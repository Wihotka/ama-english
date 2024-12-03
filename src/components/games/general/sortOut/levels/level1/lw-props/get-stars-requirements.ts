import {StarsRequirementsCb} from '@custom-types/game';
import {SortOutGameT} from '../../../type';

export const getStarsRequirements:StarsRequirementsCb<SortOutGameT> = ({
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
