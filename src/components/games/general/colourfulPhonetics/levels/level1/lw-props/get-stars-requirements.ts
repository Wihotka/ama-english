import {StarsRequirementsCb} from '@custom-types/game';
import {ColourfulPhoneticsGameT} from '../../../type';

export const getStarsRequirements:StarsRequirementsCb<
    ColourfulPhoneticsGameT
> = () => [
    {
        maxErrors: 2,
    },
    {
        maxErrors: 4,
    },
    {
        maxErrors: 6,
    },
];
