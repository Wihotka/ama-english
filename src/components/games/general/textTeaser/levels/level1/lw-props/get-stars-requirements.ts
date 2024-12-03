import {StarsRequirementsCb} from '@custom-types/game';
import {TextTeaserGameT} from '../../../type';

export const getStarsRequirements:StarsRequirementsCb<TextTeaserGameT> = () => [
    {
        maxErrors: 0,
    },
    {
        maxErrors: 1,
    },
    {
        maxErrors: 2,
    },
];
