import {GameLevels} from '@custom-types/game';
import {YesntT} from '../type';
import {Level1} from './level1';

const level1 = (props:YesntT) => Level1({...props});

export const levels:GameLevels<YesntT> = {
    level1,
    level2: level1,
};
