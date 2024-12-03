import {timeResolver} from '../../../config';

import {StarsRequirementsCb} from '@custom-types';
import {LostTwinsGameL1T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<LostTwinsGameL1T> = ({gameSettings}) => {
    const {mode, level} = gameSettings;

    return [
        {gameTime: timeResolver[level][mode][0]},
        {gameTime: timeResolver[level][mode][1]},
        {gameTime: timeResolver[level][mode][2]}
    ];
};
