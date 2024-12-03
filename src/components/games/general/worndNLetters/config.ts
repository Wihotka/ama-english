import {ControlNames, WordsThemes} from '@custom-types';
import {
    WorndNLetters_Config,
    WorndNLetters_GameConfig,
    WorndNLetters_SettingsTemplate
} from './type';

const settingsTemplate:WorndNLetters_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        disabledSettings: {
            1: ['theme'],
            2: ['complexity']
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
        dependentFrom: 'course',
        dependentValues: {
            1: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.coloursShapes,
                WordsThemes.familyHome,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.animals
            ],
            2: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.familyHome,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.animals,
                WordsThemes.school,
                WordsThemes.nature,
                WordsThemes.cityLife,
                WordsThemes.professions
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
        valueType: '1',
        controlName: ControlNames['carousel']
    },
    complexity: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        controlName: ControlNames['carousel']
    },
    answersQty: {
        min: 4,
        max: 8,
        step: 1,
        valueType: 1,
        controlName: ControlNames['inputNumber']
    }
};

const gameConfig:WorndNLetters_GameConfig = {
    bgColor: {
        1: 'linear-gradient(349.61deg, rgba(209, 255, 158, 0.72) -8.3%, rgba(130, 214, 120, 0.72) 112.65%), #FFFFFF',
        2: 'linear-gradient(146.05deg, #F07141 -6.14%, #ECAE5F 109.76%)',
        3: 'linear-gradient(349.61deg, rgba(209, 255, 158, 0.72) -8.3%, rgba(130, 214, 120, 0.72) 112.65%), #FFFFFF',
        4: 'linear-gradient(146.05deg, #70BCEB -6.14%, #C6E256 109.76%)'
    },
    displayedSettings: {
        1: ['complexity', 'answersQty'],
        2: ['course', 'theme', 'answersQty']
    }
};

export const config:WorndNLetters_Config = {
    gameConfig, settingsTemplate
};
