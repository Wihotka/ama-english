import {ClickItEasyThemes, ControlNames, sentenceTypes} from '@custom-types';
import {ClickItEasy_Config, ClickItEasy_GameConfig, ClickItEasy_SettingsTemplate} from './type';

const settingsTemplate:ClickItEasy_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        disabledSettings: {
            1: ['complexity']
        }
    },
    course: {
        min: 1,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider,
        disabledSettings: {1: ['theme']}
    },
    theme: {
        dependentFrom: 'course',
        dependentValues: {
            1: [
                ClickItEasyThemes.simpleSentence
            ],
            2: [
                ClickItEasyThemes.presentSimple,
                ClickItEasyThemes.presentContinuous,
                ClickItEasyThemes.pastSimple,
                ClickItEasyThemes.mustShould,
                ClickItEasyThemes.demonstrativePronouns,
                ClickItEasyThemes.haveTo
            ],
            3: [
                ClickItEasyThemes.presentSimple,
                ClickItEasyThemes.presentContinuous,
                ClickItEasyThemes.pastSimple,
                ClickItEasyThemes.haveTo,
                ClickItEasyThemes.mustShould,
                ClickItEasyThemes.presentPerfect,
                ClickItEasyThemes.futureSimple
            ],
            4: [
                ClickItEasyThemes.presentSimple,
                ClickItEasyThemes.presentContinuous,
                ClickItEasyThemes.pastSimple,
                ClickItEasyThemes.haveTo,
                ClickItEasyThemes.mustShould,
                ClickItEasyThemes.presentPerfect,
                ClickItEasyThemes.futureSimple,
                ClickItEasyThemes.pastContinuous,
                ClickItEasyThemes.wordOrder
            ]
        },
        valueType: ClickItEasyThemes.simpleSentence,
        controlName: ControlNames.carousel
    },
    sentenceType: {
        values: [
            sentenceTypes.affirmativeSentence,
            sentenceTypes.negativeSentence,
            sentenceTypes.interrogativeSentence,
            sentenceTypes.random
        ],
        valueType: sentenceTypes.affirmativeSentence,
        controlName: ControlNames.carousel,
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
        max: 8,
        step: 1,
        valueType: 1
    }
};

const gameConfig:ClickItEasy_GameConfig = {
    bgColor: {
        1: 'linear-gradient(146.05deg, #9EC1FF -6.14%, #4C7DFF 109.76%)',
        2: 'linear-gradient(146.05deg, #87FF7C -6.14%, #529C74 109.76%)',
        3: 'linear-gradient(146.05deg, #87FF7C -6.14%, #529C74 109.76%)',
        4: 'linear-gradient(146.05deg, #C8E9F6 -6.14%, #80B8F6 109.76%)'
    },
    displayedSettings: ['course', 'theme', 'sentenceType', 'answersQty'],
};

enum timers {
    firstComplexity = 90,
    secondComplexity = 60,
    thirdComplexity = 45
}

export const getTimerValue = (complexity:number):number =>
    complexity === 1 ? timers.firstComplexity : complexity === 2 ? timers.secondComplexity : timers.thirdComplexity;

export const config:ClickItEasy_Config = {
    gameConfig,
    settingsTemplate,
};