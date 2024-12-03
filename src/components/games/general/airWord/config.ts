import {ControlNames, WordsThemes} from '@custom-types';
import {AirWord_Config, AirWord_GameConfig, AirWord_SettingsTemplate} from './type';

const settingsTemplate:AirWord_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        disabledSettings: {
            2: ['planesQty']
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
                WordsThemes.coloursShapes,
                WordsThemes.familyHome,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.animals,
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.holidays
            ],
            2: [
                WordsThemes.familyHome,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.animals,
                WordsThemes.human,
                WordsThemes.school,
                WordsThemes.cityLife,
                WordsThemes.nature,
                WordsThemes.professions
            ],
            3: [
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.human,
                WordsThemes.lifeStyle,
                WordsThemes.clothesWeather,
                WordsThemes.shopping,
                WordsThemes.food,
                WordsThemes.school,
                WordsThemes.travel,
                WordsThemes.professions,
                WordsThemes.cityLife,
                WordsThemes.holidays
            ],
            4: [
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.inventions,
                WordsThemes.gamesHobbies,
                WordsThemes.moviesSeries,
                WordsThemes.socialNets,
                WordsThemes.human,
                WordsThemes.health,
                WordsThemes.nature,
                WordsThemes.clothesWeather,
                WordsThemes.shopping,
                WordsThemes.food,
                WordsThemes.school,
                WordsThemes.travel,
                WordsThemes.cityLife,
                WordsThemes.feelings
            ]
        },
        valueType: WordsThemes.animals,
        controlName: ControlNames.carousel
    },
    planesQty: {
        min: 3,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames['carousel']
    },
    speedInSeconds: {
        values: ['10', '9', '8', '7', '6'],
        valueType: '1',
        controlName: ControlNames['carousel']
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1
    }
};

const gameConfig:AirWord_GameConfig = {
    bgColor: {
        1: 'linear-gradient(146.05deg, #92D2EE -6.14%, #5678C1 109.76%)',
        2: 'linear-gradient(146.05deg, #BDACD4 -6.14%, #885CC2 109.76%)',
        3: 'linear-gradient(146.05deg, #ADCBF2 -6.14%, #E8E2F3 109.76%)',
        4: 'linear-gradient(146.05deg, #ADCBF2 -6.14%, #E8E2F3 109.76%)'
    },
    displayedSettings: {
        1: ['course', 'theme', 'planesQty', 'answersQty'],
        2: ['course', 'theme', 'answersQty']
    }
};

export const config:AirWord_Config = {gameConfig, settingsTemplate};