import {Level} from './level';

import {GameLevels} from '@custom-types';

import {NavigationT} from './level/type';

const level = (props:NavigationT) => Level({...props});

export const levels:GameLevels = {
    level1: level
};