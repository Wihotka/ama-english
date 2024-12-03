import {ArenaGameConfig, ArenaModes} from '@custom-types';
import {LetterChain_Config, LetterChain_Settings} from './type';

// обязательны все поля
const gameConfig:ArenaGameConfig = {
    section: 'arena',
    gameName: 'letterChain',
    timer: {
        online: 180,
        offline: 300
    },
    timerDelay: 1,
    stepTime: 30,
    roundQty: 10,
    modes: [
        ArenaModes.online,
        ArenaModes.offline
    ]
};

// данные для игры ВСЕГДА будут идти со словаря
const gameSettings:LetterChain_Settings = {
    // course: [1, 2],
    // theme: [
    //     WordsThemes.animals,
    //     WordsThemes.acquaintanceNumbers,
    //     WordsThemes.coloursShapes,
    //     WordsThemes.familyHome,
    //     WordsThemes.food
    // ],
    // fieldSize: [4, 6]
};

export const config:LetterChain_Config = {
    gameConfig,
    gameSettings
};