import {Level1} from './level1';
import {GameLevels} from '@custom-types';

import {WordBoxT} from './level1/type';

const level1 = (props:WordBoxT) => Level1({...props});
const level2 = (props:WordBoxT) => Level1({...props});
const level3 = (props:WordBoxT) => Level1({...props});
const level4 = (props:WordBoxT) => Level1({...props});

export const levels:GameLevels = {
    level1, level2, level3, level4
};
