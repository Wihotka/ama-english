import {ControlNames, WordsThemes} from '@custom-types';
import {BuildMe_Config, BuildMe_GameConfig, BuildMe_SettingsTemplate} from './type';

const settingsTemplate:BuildMe_SettingsTemplate = {
    level: {
        min: 1,
        max: 3,
        step: 1,
        valueType: 1,
        disabledSettings: {
            3: ['hint']
        }
    },
    theme: {
        values: [
            WordsThemes.acquaintanceNumbers,
            WordsThemes.coloursShapes,
            WordsThemes.familyHome,
            WordsThemes.gamesHobbies,
            WordsThemes.clothesWeather,
            WordsThemes.food,
            WordsThemes.travel,
            WordsThemes.animals,
            'random'
        ],
        valueType: WordsThemes.time,
        controlName: ControlNames.carousel
    },
    hint: {
        min: 0,
        max: 1,
        step: 1,
        valueType: 1,
        controlName: ControlNames.toggle
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1
    }
};

const gameConfig:BuildMe_GameConfig = {
    bgColor: 'linear-gradient(5.12deg, #D4BD15 44.28%, #15E030 95.74%)',
    displayedSettings: ['theme', 'course', 'answersQty'],
    levelConfigs: {
        1: {mixedPuzzleArrayLongerByFL: 0},
        2: {mixedPuzzleArrayLongerByFL: 40},
        3: {mixedPuzzleArrayLongerByFL: 40}
    }
};

export const config:BuildMe_Config = {
    gameConfig,
    settingsTemplate,
};