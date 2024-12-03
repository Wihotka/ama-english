import {Level1} from './level1';

import {GameLevels} from '@custom-types';
import {TimelineL1T} from './level1/type';

const level1 = (props:TimelineL1T) => Level1({...props});

export const levels:GameLevels = {
    level1,
    level2: level1
};