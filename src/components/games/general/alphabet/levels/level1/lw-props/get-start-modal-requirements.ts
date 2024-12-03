import {timeResolver} from '../../../config';

import {StarsRequirementsCb} from '@custom-types';
import {AlphabetGameL1T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<AlphabetGameL1T> = ({gameSettings}) => {
    const {mode} = gameSettings;

    return timeResolver[mode].map((time:number) => ({gameTime: time}));
};
