import {ControlNames, WordsThemes} from '@custom-types';
import {ItsMatch_Config, ItsMatch_GameConfig, ItsMatch_SettingsTemplate} from './type';

const settingsTemplate:ItsMatch_SettingsTemplate = {
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
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.holidays,
                'random'
            ],
            //TODO добавить категорий
            2: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.food,
                WordsThemes.travel,
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

const gameConfig:ItsMatch_GameConfig = {
    displayedSettings: ['course', 'answersQty', 'theme'],
    bgColor: {
        1: 'linear-gradient(125.75deg, #B9FFC8 5.15%, #FFC5CD 93.12%)',
        2: 'linear-gradient(146.05deg, #71DDFF -6.14%, #DD8FFF 109.76%)',
        3: 'linear-gradient(146.05deg, #FFDF93 -6.14%, #FF9C61 109.76%)',
        4: 'linear-gradient(146.05deg, #FFCFD8 -6.14%, #FFA7EB 109.76%)'
    }
};

export const config:ItsMatch_Config = {
    settingsTemplate, gameConfig
};