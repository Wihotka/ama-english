import {ControlNames, WordsThemes} from '@custom-types';
import {Wordpad_Config, Wordpad_GameConfig, Wordpad_SettingsTemplate} from './type';

const settingsTemplate:Wordpad_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        disabledSettings: {
            1: ['complexity'],
            2: ['hint'],
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
    hint: {
        min: 0,
        max: 1,
        step: 1,
        valueType: 1,
        controlName: ControlNames.toggle
    },
    complexity: {
        min: 1,
        max: 3,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1
    }
};

const gameConfig:Wordpad_GameConfig = {
    bgColor: {
        1: 'linear-gradient(293.22deg, rgba(191, 168, 240, 0.4) 4%, rgba(248, 185, 236, 0.4) 89.93%), #FFFFFF',
        2: 'linear-gradient(357.61deg, #F8D4A0 -10.84%, #F8A16C 107.35%)',
        3: 'linear-gradient(293.22deg, rgba(191, 168, 240, 0.4) 4%, rgba(248, 185, 236, 0.4) 89.93%), #FFFFFF',
        4: 'linear-gradient(357.61deg, #FAE2EE -10.84%, #D3DDF9 107.35%)'
    },
    displayedSettings: ['course', 'theme', 'answersQty'],
};

enum timers {
    firstComplexity = 60,
    secondComplexity = 45,
    thirdComplexity = 30
}

export const getTimerValue = (complexity:number):number =>
    complexity === 1 ? timers.firstComplexity : complexity === 2 ? timers.secondComplexity : timers.thirdComplexity;

export const config:Wordpad_Config = {
    gameConfig,
    settingsTemplate,
};