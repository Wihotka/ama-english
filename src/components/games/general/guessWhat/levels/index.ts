import {GameLevels} from '@custom-types/game';
import {GuessWhatT} from '../type';
import {Level1} from './level1';

const level1 = (props:GuessWhatT) => Level1({...props});

export const levels:GameLevels<GuessWhatT> = {
    level1,
    level2: level1,
    level3: level1,
};
