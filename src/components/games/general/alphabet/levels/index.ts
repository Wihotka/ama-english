import {Level1} from './level1';
import {Level2} from './level2';
import {Level3} from './level3';
import {GameLevels} from '@custom-types';

import {AlphabetL1T} from './level1/type';
import {AlphabetL2T} from './level2/type';
import {AlphabetL3T} from './level3/type';

const level1 = (props:AlphabetL1T) => Level1({...props});
const level2 = (props:AlphabetL2T) => Level2({...props});
const level3 = (props:AlphabetL3T) => Level3({...props});

export const levels:GameLevels = {
    level1, level2, level3
};
