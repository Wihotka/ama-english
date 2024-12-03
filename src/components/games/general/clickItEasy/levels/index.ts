import {Level1} from './level1';
import {Level2} from './level2';

import {GameLevels} from '@custom-types';

import {ClickItEasyT1} from './level1/type';
import {ClickItEasyT2} from './level2/type';

const level1 = (props:ClickItEasyT1) => Level1({...props});
const level2 = (props:ClickItEasyT2) => Level2({...props});

export const levels:GameLevels = {
    level1,
    level2
};