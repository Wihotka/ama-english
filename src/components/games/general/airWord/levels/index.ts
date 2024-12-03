import {Level} from './level';

import {GameLevels} from '@custom-types';

import {AirWordT} from './level/type';

const level = (props:AirWordT) => Level({...props});

export const levels:GameLevels = {
    level1: level,
    level2: level
};