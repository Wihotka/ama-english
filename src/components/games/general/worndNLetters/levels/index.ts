import {Level1} from './level1';
import {GameLevels} from '@custom-types';

import {WorndNLettersT} from './level1/type';

const level1 = (props:WorndNLettersT) => Level1({...props});
const level2 = (props:WorndNLettersT) => Level1({...props});

export const levels:GameLevels = {
    level1, level2
};
