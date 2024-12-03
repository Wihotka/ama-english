import {Level} from './level';

import {GameLevels} from '@custom-types';

import {BuildMeT} from './level/type';

const level = (props:BuildMeT) => Level({...props});

export const levels:GameLevels = {
    level1: level,
    level2: level,
    level3: level
};