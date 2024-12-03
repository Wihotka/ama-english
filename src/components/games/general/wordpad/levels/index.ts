import {Level1} from './level1';
import {Level2} from './level2';

import {GameLevels} from '@custom-types';

import {WordpadT1} from './level1/type';
import {WordpadT2} from './level2/type';

const level1 = (props:WordpadT1) => Level1({...props});
const level2 = (props:WordpadT2) => Level2({...props});

export const levels:GameLevels = {
    level1,
    level2
};