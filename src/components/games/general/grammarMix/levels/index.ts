import {Level1} from './level1';
import {Level2} from './level2';

import {GameLevels} from '@custom-types';
import {GrammarMixT1} from './../levels/level1/type';
import {GrammarMixT2} from './../levels/level2/type';

const level1 = (props:GrammarMixT1) => Level1({...props});
const level2 = (props:GrammarMixT2) => Level2({...props});

export const levels:GameLevels = {
    level1,
    level2
};