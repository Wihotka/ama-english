import {Level1} from './level1';

import {GameLevels} from '@custom-types';
import {PhraseJumpingT} from './../levels/level1/type';

const level1 = (props:PhraseJumpingT) => Level1({...props});

export const levels:GameLevels = {
    level1,
};