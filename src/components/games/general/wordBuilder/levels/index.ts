import {Level} from './level';

import {GameLevels} from '@custom-types';

import {WordBuilderT} from './level/type';

const level = (props:WordBuilderT) => Level({...props});

export const levels:GameLevels = {
    level1: level,
    level2: level,
    level3: level
};