import {Level1} from './level1';

import {GameLevels} from '@custom-types';
import {FruitSmoothieT} from './level1/type';

const level1 = (props:FruitSmoothieT) => Level1({...props});

export const levels:GameLevels = {
    level1,
    level2: level1,
    level3: level1,
};