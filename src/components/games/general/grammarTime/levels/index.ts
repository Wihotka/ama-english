import {GameLevels} from '@custom-types/game';
import {GrammarTimeL1T} from './level1/type';
import {GrammarTimeL2T} from './level2/type';
import {Level1} from './level1';
import {Level2} from './level2';

const level1 = (props:GrammarTimeL1T) => Level1({...props});
const level2 = (props:GrammarTimeL2T) => Level2({...props});

export const levels:GameLevels = {
    level1,
    level2,
};
