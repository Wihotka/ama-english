import {ArenaGameConfig, ArenaGameSettings, InitialArenaGameProps, WordsThemes} from '@custom-types';
import {LetterChainGD, LetterChainGPD} from './init/type';

export type LetterChain_Settings = ArenaGameSettings<{
    // course:Array<number>,
    // theme:WordsThemes[],
    // fieldSize:Array<number>
}>;

export type LetterChain_Config = {
    gameConfig:ArenaGameConfig,
    gameSettings:LetterChain_Settings
};

export type LetterChainT = InitialArenaGameProps<
    LetterChain_Settings,
    LetterChainGD,
    LetterChainGPD>;

export type LetterChainGameT = LetterChainT['game'];