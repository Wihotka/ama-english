import {Level} from './level';

import {GameLevels} from '@custom-types';

import {EchoChamberT} from './level/type';

const level = (props:EchoChamberT) => Level({...props});

export const levels:GameLevels = {
    level1: level
};