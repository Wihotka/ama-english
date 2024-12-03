import {Level1} from './level1';
import {GameLevels} from '@custom-types';
import {WordSaladT} from '../type';

const level1 = (props:WordSaladT) => Level1({...props});

export const levels:GameLevels = {
    level1
};
