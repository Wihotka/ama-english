import {GameLevels} from '@custom-types/game';
import {SortOutT} from '../type';
import {Level1} from './level1';

const level1 = (props:SortOutT) => Level1({...props});

export const levels:GameLevels<SortOutT> = {
    level1,
};
