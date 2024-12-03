import {StarsRequirementsCb} from '@custom-types';
import {WordBoxGameT} from '../type';

export const getStarsRequirements:StarsRequirementsCb<WordBoxGameT> = ({}) => [
    {maxErrors: 0},
    {maxErrors: 1},
    {maxErrors: 2}
];

