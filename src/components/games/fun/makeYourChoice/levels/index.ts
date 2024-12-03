import {GameLevels} from '@custom-types/game';
import {MakeYourChoiceT} from '../type';
import {Level1} from './level1';

const level1 = (props:MakeYourChoiceT) => Level1({...props});

export const levels:GameLevels<MakeYourChoiceT> = {
    level1,
    level2: level1,
};
