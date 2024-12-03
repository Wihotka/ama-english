import {GameLevels} from '@custom-types';
import {Level} from './level';

import {ItsMatchT} from './level/type';

const level1 = (props:ItsMatchT) => Level({...props});

export const levels:GameLevels = {
    level1,
    level2: level1,
};