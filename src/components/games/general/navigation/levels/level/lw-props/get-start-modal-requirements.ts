import {StarsRequirementsCb} from '@custom-types';
import {NavigationGameT} from '../type';

export const getStarsRequirements:StarsRequirementsCb<NavigationGameT> = () =>
    [
        {collectItems: 5},
        {collectItems: 4},
        {collectItems: 3}
    ];
