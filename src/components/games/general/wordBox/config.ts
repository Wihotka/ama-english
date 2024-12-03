import {ControlNames, GameImagesPaths, WordsThemes} from '@custom-types';
import {
    WordBox_Config,
    WordBox_GameConfig,
    WordBox_SettingsTemplate
} from './type';
import {WordBox_ImagesPaths} from './type';

const settingsTemplate:WordBox_SettingsTemplate = {
    level: {
        min: 1,
        max: 4,
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
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.holidays
            ],
            2: [
                WordsThemes.acquaintanceNumbers,
                WordsThemes.familyHome,
                WordsThemes.animals,
                WordsThemes.gamesHobbies,
                WordsThemes.clothesWeather,
                WordsThemes.food,
                WordsThemes.travel,
                WordsThemes.cityLife,
                WordsThemes.human,
                WordsThemes.time,
                WordsThemes.school,
                WordsThemes.nature,
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
    wordsQty: {
        // min: 4,
        min: 5,
        max: 6,
        step: 1,
        valueType: 1,
        controlName: ControlNames['inputNumber']
    }
};

const gameImages:GameImagesPaths<WordBox_ImagesPaths> = [
    {
        name: 'paper',
        path: 'paper',
        type: 'png'
    }
];

const gameConfig:WordBox_GameConfig = {
    bgColor: {
        1: 'linear-gradient(126.74deg, rgba(0, 242, 96, 0.4) -18.83%, rgba(17, 49, 217, 0.4) 100.33%), #FFFFFF',
        2: 'linear-gradient(126.74deg, #7FC1A3 -18.83%, #3A8BBF 100.33%)',
        3: 'linear-gradient(126.74deg, rgba(0, 242, 96, 0.4) -18.83%, rgba(17, 49, 217, 0.4) 100.33%), #FFFFFF',
        4: 'linear-gradient(126.74deg, #7FC1A3 -18.83%, #A7CFE1 -18.82%, #D89EDA 100.33%)'
    },
    displayedSettings: ['course', 'complexity', 'theme', 'wordsQty'],
    gameImages,
    valuesThresholds: [10, 40, 70]
};

export const config:WordBox_Config = {
    gameConfig, settingsTemplate
};
