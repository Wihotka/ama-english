import {Level} from './level';

import {GameLevels} from '@custom-types';
import {PerfectPairsT} from './level/type';

const level1 = (props:PerfectPairsT) => Level({...props});

export const levels:GameLevels = {
    level1,
    level2: level1,
};