import {lazy} from 'react';
import {GamesT} from '@components/games';

const SomeGameName = lazy(() => import('./someGameName'));
const LegoLetter = lazy(() => import('./legoLetter'));
const Alphabet = lazy(() => import('./alphabet'));
const BuildMe = lazy(() => import('./buildMe'));
const GuessTheSound = lazy(() => import('./guessTheSound'));
const ItsMatch = lazy(() => import('./itsMatch'));
const WordBox = lazy(() => import('./wordBox'));
const PerfectPairs = lazy(() => import('./perfectPairs'));
const Levitation = lazy(() => import('./levitation'));
const Timeline = lazy(() => import('./timeline'));
const WorndNLetters = lazy(() => import('./worndNLetters'));
const Wordpad = lazy(() => import('./wordpad'));
const LostTwins = lazy(() => import('./lostTwins'));
const Yesnt = lazy(() => import('./yesnt'));
const SortOut = lazy(() => import('./sortOut'));
const ClickItEasy = lazy(() => import('./clickItEasy'));
const FruitSmoothie = lazy(() => import('./fruitSmoothie'));
const GuessWhat = lazy(() => import('./guessWhat'));
const GrammarTime = lazy(() => import('./grammarTime'));
const BreakTheSpell = lazy(() => import('./breakTheSpell'));
const GrammarMix = lazy(() => import('./grammarMix'));
const PhraseJumping = lazy(() => import('./phraseJumping'));
const AirWord = lazy(() => import('./airWord'));
const ColourfulPhonetics = lazy(() => import('./colourfulPhonetics'));
const Checkpoint = lazy(() => import('./checkpoint'));
const WordBuilder = lazy(() => import('./wordBuilder'));
const TextTeaser = lazy(() => import('./textTeaser'));
const EchoChamber = lazy(() => import('./echoChamber'));
const Navigation = lazy(() => import('./navigation'));

export const GeneralGames:GamesT = {
    SomeGameName,
    LegoLetter,
    Alphabet,
    BuildMe,
    GuessTheSound,
    ItsMatch,
    WordBox,
    PerfectPairs,
    Levitation,
    Timeline,
    WorndNLetters,
    LostTwins,
    Wordpad,
    Yesnt,
    SortOut,
    ClickItEasy,
    FruitSmoothie,
    GuessWhat,
    GrammarTime,
    BreakTheSpell,
    GrammarMix,
    PhraseJumping,
    AirWord,
    ColourfulPhonetics,
    Checkpoint,
    WordBuilder,
    TextTeaser,
    EchoChamber,
    Navigation
};
