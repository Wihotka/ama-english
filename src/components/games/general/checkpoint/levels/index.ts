import {Level} from './level';

import {GameLevels} from '@custom-types';

import {CheckpointT} from './level/type';

const level = (props:CheckpointT) => Level({...props});

export const levels:GameLevels = {
    level1: level,
    level2: level
};