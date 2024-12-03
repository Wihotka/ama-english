import {GameLevels} from '@custom-types';

import {Level1} from './level1';
import {PowerCoupleT} from './level1/type';

const level1 = (props:PowerCoupleT) => Level1({...props});

export const levels:GameLevels = {
    level1,
};