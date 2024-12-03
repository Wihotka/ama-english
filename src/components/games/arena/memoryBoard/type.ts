import {ArenaGameConfig, ArenaGameSettings, InitialArenaGameProps, WordsThemes} from '@custom-types';
import {MemoryBoardGD, MemoryBoardGPD} from './init/type';

export type MemoryBoard_Card = {
    id:number;
    word:string;
    content:string;
    type:string;
    inSelect:boolean;
    isHidden:boolean;
    isDisabled:boolean;
    isCorrect:boolean | null;
    isFlipped:boolean;
};

export type MemoryBoard_Settings = ArenaGameSettings<{
    course:Array<number>,
    theme:WordsThemes[],
    fieldSize:Array<number>
}>;

export type MemoryBoard_Config = {
    gameConfig:ArenaGameConfig,
    gameSettings:MemoryBoard_Settings
};

export type MemoryBoardT = InitialArenaGameProps<
    MemoryBoard_Settings,
    MemoryBoardGD,
    MemoryBoardGPD>;

export type MemoryBoardGameT = MemoryBoardT['game'];