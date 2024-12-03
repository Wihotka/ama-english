import {globalGameConfig} from '@global-config/game';

import {StarsRequirementsCb} from '@custom-types';
import {AlphabetGameL3T} from '../type';

export const getStarsRequirements:StarsRequirementsCb<AlphabetGameL3T> = ({gameSettings}) => {
    const {lettersQty} = gameSettings;

    return [...globalGameConfig.valuesThresholds].reverse().map(value => ({
        maxErrors: Math.floor((100 - value) / 100 * (lettersQty * 3))
    }));
};
