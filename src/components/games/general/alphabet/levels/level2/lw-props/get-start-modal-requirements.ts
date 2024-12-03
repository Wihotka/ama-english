import {StarsRequirementsCb} from '@custom-types';
import {AlphabetGameL2T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<AlphabetGameL2T> = () => [
    {maxErrors: 0}, {maxErrors: 2}, {maxErrors: 4}
];
