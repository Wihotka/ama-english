import {ControlNames, WordsThemes} from '@custom-types';
import {BreakTheSpell_Config, BreakTheSpell_GameConfig, BreakTheSpell_SettingsTemplate} from './type';

const settingsTemplate:BreakTheSpell_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1
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
                WordsThemes.animals,
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.holidays,
                'random'
            ],
            2: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.familyHome,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.animals,
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.school,
                WordsThemes.nature,
                WordsThemes.cityLife,
                WordsThemes.professions,
                WordsThemes.feelings,
                'random'
            ],
            3: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.school,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.human,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.cityLife,
                WordsThemes.professions,
                WordsThemes.holidays,
                WordsThemes.shopping,
                WordsThemes.lifeStyle,
                WordsThemes.rules
            ],
            4: [
                WordsThemes.school,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.human,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.cityLife,
                WordsThemes.shopping,
                WordsThemes.nature,
                WordsThemes.inventions,
                WordsThemes.moviesSeries,
                WordsThemes.socialNets,
                WordsThemes.health,
                WordsThemes.feelings
            ]
        },
        valueType: 'random',
        controlName: ControlNames.carousel
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1
    }
};

const gameConfig:BreakTheSpell_GameConfig = {
    bgColor: {
        1: 'linear-gradient(146.05deg, #8A3F97 -6.14%, #C53B51 109.76%)',
        2: 'linear-gradient(146.05deg, #DA6EA1 -6.14%, #F18560 109.76%)',
        3: 'linear-gradient(146.05deg, #DA6EA1 -6.14%, #F18560 109.76%)',
        4: 'linear-gradient(146.05deg, #88D4F8 -6.14%, #FF967F 109.76%)'
    },
    displayedSettings: ['course', 'theme', 'answersQty'],
};

export const config:BreakTheSpell_Config = {
    gameConfig,
    settingsTemplate,
};