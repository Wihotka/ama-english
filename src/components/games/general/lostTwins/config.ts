import {LostTwins_Config, LostTwins_GameConfig, LostTwins_SettingsTemplate} from './type';
import {ControlNames, WordsThemes} from '@custom-types';

const settingsTemplate:LostTwins_SettingsTemplate = {
    level: {
        min: 1,
        max: 3,
        step: 1,
        valueType: 1,
        disabledSettings: {
            1: ['hint']
        }
    },
    course: {
        min: 1,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    theme: {
        valueType: 'random',
        dependentFrom: 'course',
        dependentValues: {
            1: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.coloursShapes,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                'random'
            ],
            2: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.school,
                WordsThemes.cityLife,
                WordsThemes.professions,
                WordsThemes.nature,
                'random'
            ],
            3: [
                WordsThemes.school,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.cityLife,
                WordsThemes.professions,
                WordsThemes.holidays,
                WordsThemes.shopping
            ],
            4: [
                WordsThemes.school,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.cityLife,
                WordsThemes.shopping,
                WordsThemes.inventions,
                WordsThemes.moviesSeries,
                WordsThemes.socialNets,
                WordsThemes.health
            ]
        },
        controlName: ControlNames.carousel
    },
    fieldSize: {
        values: ['4x4', '5x4'],
        valueType: '1',
        controlName: ControlNames.carousel
    },
    mode: {
        values: ['easy', 'medium', 'hard', 'extreme'],
        valueType: '1',
        controlName: ControlNames.carousel
    },
    hint: {
        min: 0,
        max: 1,
        step: 1,
        valueType: 0,
        controlName: ControlNames.toggle
    }
};

export const timeResolver:{ [key:number]:{ [key:string]:Array<number> } } = {
    1: {
        easy: [120, 130, 140],
        medium: [80, 90, 100],
        hard: [70, 80, 90],
        extreme: [60, 70, 80]
    },
    2: {
        easy: [135, 145, 155],
        medium: [115, 125, 135],
        hard: [105, 115, 125],
        extreme: [95, 105, 115]
    },
    3: {
        easy: [135, 145, 155],
        medium: [115, 125, 135],
        hard: [105, 115, 125],
        extreme: [95, 105, 115]
    }
};

const gameConfig:LostTwins_GameConfig = {
    levelConfigs: {
        1: {timeVisibilityCard: 100},
        2: {timeVisibilityCard: 100},
        3: {timeVisibilityCard: 100}
    },
    valuesThresholds: [60, 80, 100],
    displayedSettings: ['course', 'theme', 'fieldSize', 'mode'],
    bgColor: {
        1: 'linear-gradient(5.12deg, rgba(226, 141, 94, 0.55) 44.28%, rgba(138, 161, 225, 0.55) 95.74%), #FFFFFF',
        2: 'linear-gradient(0deg, #C7FFDF 31%, #5681FF 100%)',
        3: 'linear-gradient(0deg, #C7FFDF 31%, #5681FF 100%)',
        4: 'linear-gradient(146.05deg, #FFDB9D -6.14%, #FFB341 109.76%)'
    }
};

export const config:LostTwins_Config = {
    gameConfig: gameConfig,
    settingsTemplate: settingsTemplate
};