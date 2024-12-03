import {ControlNames, WordsThemes} from '@custom-types';
import {WordBuilder_Config, WordBuilder_GameConfig, WordBuilder_SettingsTemplate} from './type';

const settingsTemplate:WordBuilder_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        disabledSettings: {
            2: ['hint']
        }
    },
    course: {
        min: 2,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    theme: {
        dependentFrom: 'course',
        dependentValues: {
            2: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.school,
                WordsThemes.familyHome,
                WordsThemes.nature,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.cityLife,
                WordsThemes.professions,
                WordsThemes.feelings
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

const gameConfig:WordBuilder_GameConfig = {
    bgColor: {
        2: 'linear-gradient(146.05deg, #FFDDB2 -6.14%, #C4A8DF 109.76%)',
        3: 'linear-gradient(146.05deg, #FFDDB2 -6.14%, #C4A8DF 109.76%)',
        4: 'linear-gradient(146.05deg, #FFDDB2 -6.14%, #C4A8DF 109.76%)'
    },
    displayedSettings: ['theme', 'course', 'answersQty'],
    levelConfigs: {
        1: {mixedPuzzleArrayLongerByFL: 40},
        2: {mixedPuzzleArrayLongerByFL: 40}
    }
};

export const config:WordBuilder_Config = {
    gameConfig,
    settingsTemplate,
};