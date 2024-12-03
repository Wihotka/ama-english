import {lazy} from 'react';
import {GamesT} from '@components/games';

const MemoryBoard = lazy(() => import('./memoryBoard'));
const LetterChain = lazy(() => import('./letterChain'));

export const ArenaGames:GamesT = {
    MemoryBoard,
    LetterChain
};
