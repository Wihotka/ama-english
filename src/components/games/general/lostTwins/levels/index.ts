import {Level} from './level';

import {GameLevels} from '@custom-types';
import {LostTwinsT} from './level/type';

const level1 = (props:LostTwinsT) => Level({...props});

export const levels:GameLevels = {
    level1,
    level2: level1,
    level3: level1,
};