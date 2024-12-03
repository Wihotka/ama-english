import {GameLevels} from '@custom-types/game';
import {SecretCodeT} from '../type';
import {Level1} from './level1';

const level1 = (props:SecretCodeT) => Level1({...props});

export const levels:GameLevels<SecretCodeT> = {
    level1,
    level2: level1,
    level3: level1,
};
