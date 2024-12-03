import {lazy} from 'react';
import {GamesT} from '@components/games';

const WordSalad = lazy(() => import('./wordSalad'));
const SecretCode = lazy(() => import('./secretCode'));
const Storyteller = lazy(() => import('./storyteller'));
const MakeYourChoice = lazy(() => import('./makeYourChoice'));
const PowerCouple = lazy(() => import('./powerCouple'));

export const FunGames:GamesT = {
    WordSalad,
    SecretCode,
    Storyteller,
    MakeYourChoice,
    PowerCouple
};
