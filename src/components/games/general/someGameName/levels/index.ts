import {Level1} from './level1';
import {GameLevels} from '@custom-types';
import {SomeGameNameT} from '../type';

const level1 = (props:SomeGameNameT) => Level1({...props});

export const levels:GameLevels<SomeGameNameT> = {
    level1,
};
