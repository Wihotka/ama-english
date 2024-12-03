import {Level1} from './level1';
import {Level2} from './level2';
import {GameLevels} from '@custom-types';

import {LegoLetterL1T} from './level1/type';
import {LegoLetterL2T} from './level2/type';

const level1 = (props:LegoLetterL1T) => Level1({...props});
const level2 = (props:LegoLetterL2T) => Level2({...props});

export const levels:GameLevels = {
    level1, level2
};
