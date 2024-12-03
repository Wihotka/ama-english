import {GameLevels} from '@custom-types/game';
import {ColourfulPhoneticsT} from '../type';
import {Level1} from './level1';

const level1 = (props:ColourfulPhoneticsT) => Level1({...props});

export const levels:GameLevels<ColourfulPhoneticsT> = {
    level1,
    level2: level1,
};
