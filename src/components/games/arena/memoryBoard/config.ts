import {ArenaGameConfig, ArenaModes, WordsThemes} from '@custom-types';
import {MemoryBoard_Config, MemoryBoard_Settings} from './type';

// обязательны все поля
const gameConfig:ArenaGameConfig = {
    section: 'arena',
    gameName: 'memoryBoard',
    timer: {
        online: undefined,
        offline: 300
    },
    timerDelay: 3,
    stepTime: 10,
    roundQty: 10,
    modes: [
        ArenaModes.online,
        ArenaModes.offline
    ]
};

// данные для игры ВСЕГДА будут идти со словаря
const gameSettings:MemoryBoard_Settings = {
    course: [1, 2],
    theme: [
        WordsThemes.animals,
        WordsThemes.acquaintanceNumbers,
        WordsThemes.coloursShapes,
        WordsThemes.familyHome,
        WordsThemes.food
    ],
    fieldSize: [4, 6]
};

export const config:MemoryBoard_Config = {
    gameConfig,
    gameSettings
};