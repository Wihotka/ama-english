import {ControlNames, WordsThemes} from '@custom-types';
import {Levitation_Config, Levitation_GameConfig, Levitation_SettingsTemplate} from './type';

const settingsTemplate:Levitation_SettingsTemplate = {
    level: {
        min: 1,
        max: 3,
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
        valueType: WordsThemes.animals,
        controlName: ControlNames.carousel
    },
    speed: {
        min: 1,
        max: 3,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    feathersQty: {
        min: 5,
        max: 7,
        step: 1,
        valueType: 1,
        controlName: ControlNames.inputNumber
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1
    }
};

const gameConfig:Levitation_GameConfig = {
    bgColor: {
        1: 'linear-gradient(0deg, #E0FFCE 0%, #6ED3F1 71.99%, #0083C4 112.74%) #fff',
        2: 'linear-gradient(0deg, #E0FFCE 0%, #6ED3F1 71.99%, #0083C4 112.74%) #fff',
        3: 'linear-gradient(176.77deg, #5F69B3 -11.71%, #D17586 111.71%)',
        4: 'linear-gradient(176.77deg, #5F69B3 -11.71%, #D17586 111.71%)'
    },
    displayedSettings: ['theme', 'speed', 'feathersQty', 'answersQty']
};

export const config:Levitation_Config = {
    gameConfig,
    settingsTemplate,
};