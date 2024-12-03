import {GameLevels} from '@custom-types/game';
import {StorytellerT} from '../type';
import {Level1} from './level1';

const level1 = (props:StorytellerT) => Level1({...props});

export const levels:GameLevels<StorytellerT> = {
    level1,
};
