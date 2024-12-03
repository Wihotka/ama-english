import {GeneralGames} from './general';
import {FunGames} from './fun';
import {ArenaGames} from './arena';

import {FunctionComponent, LazyExoticComponent} from 'react';
import {GameInput} from '@custom-types';

export type GamesT = {
    [key:string]:LazyExoticComponent<FunctionComponent<GameInput>>
};

export const Games:GamesT = {
    ...GeneralGames,
    ...FunGames,
    ...ArenaGames
};

