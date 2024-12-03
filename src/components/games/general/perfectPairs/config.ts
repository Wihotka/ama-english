import {ControlNames, WordsThemes} from '@custom-types';
import {PerfectPairs_Config, PerfectPairs_GameConfig, PerfectPairs_SettingsTemplate} from './type';

const settingsTemplate:PerfectPairs_SettingsTemplate = {
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
                WordsThemes.nature,
                WordsThemes.cityLife,
                WordsThemes.professions,
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

    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1,
        controlName: ControlNames.inputNumber
    }

};

const gameConfig:PerfectPairs_GameConfig = {
    bgColor: {
        1: 'linear-gradient(78.01deg, #CBF1FC -7.66%, #FAB9F5 46.94%, #BEF7FD 98.67%)',
        2: 'linear-gradient(146.05deg, #FFCC51 -6.14%, #CFFFB3 109.76%)',
        3: 'linear-gradient(146.05deg, #FF987B -6.14%, #9AE1FF 109.76%)',
        4: 'linear-gradient(146.05deg, #FCE67C -6.14%, #FCA87F 109.76%)'
    },
    displayedSettings: ['course', 'answersQty', 'theme']
};

export const config:PerfectPairs_Config = {
    settingsTemplate, gameConfig
};