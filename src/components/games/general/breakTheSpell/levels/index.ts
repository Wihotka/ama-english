import {Level} from './level';

import {GameLevels} from '@custom-types';

import {BreakTheSpell} from './level/type';

const level = (props:BreakTheSpell) => Level({...props});

export const levels:GameLevels = {
    level1: level,
    level2: level
};