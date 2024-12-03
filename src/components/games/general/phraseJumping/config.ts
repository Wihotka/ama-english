import {
    PhraseJumping_Config,
    PhraseJumping_GameConfig,
    PhraseJumping_SettingTemplate
} from '@components/games/general/phraseJumping/type';
import {ControlNames, ThemePhraseJumping} from '@custom-types';

const settingsTemplate:PhraseJumping_SettingTemplate = {
    level: {
        min: 1,
        max: 1,
        step: 1,
        valueType: 1,
        needHideControl: true
    },
    course: {
        min: 1,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    theme: {
        valueType: ThemePhraseJumping.presentSimple,
        dependentFrom: 'course',
        dependentValues: {
            1: [
                ThemePhraseJumping.presentSimple,
                ThemePhraseJumping.toBe,
            ],
            2: [
                ThemePhraseJumping.toBe,
                ThemePhraseJumping.thereIsAre,
                ThemePhraseJumping.verbHave,
                ThemePhraseJumping.formsOfAdjectives
            ],
            3: [
                ThemePhraseJumping.toBe,
                ThemePhraseJumping.thereIsAre,
                ThemePhraseJumping.verbHave,
                ThemePhraseJumping.formsOfAdjectives,
                ThemePhraseJumping.fewLittle
            ],
            4: [
                ThemePhraseJumping.formsOfAdjectives,
                ThemePhraseJumping.futureContinuous,
                ThemePhraseJumping.presentPerfectContinuous,
                ThemePhraseJumping.pastPerfect
            ]
        },
        controlName: ControlNames.carousel
    },
    hint: {
        min: 0,
        max: 1,
        step: 1,
        valueType: 0,
        controlName: ControlNames.toggle
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1,
        controlName: ControlNames.inputNumber
    }
};

const gameConfig:PhraseJumping_GameConfig = {
    bgColor: {
        1: 'linear-gradient(146.05deg, #A7F3FE -6.14%, #D7D23C 109.76%)',
        2: 'linear-gradient(146.05deg, #A7F3FE -6.14%, #D7D23C 109.76%)',
        3: 'linear-gradient(146.05deg, #8AEAF8 -6.14%, #10939F 109.76%)',
        4: 'linear-gradient(146.05deg, #86ADFF -6.14%, #CCF4FD 109.76%)'
    },
    displayedSettings: ['course', 'theme', 'answersQty']
};

export const config:PhraseJumping_Config = {gameConfig, settingsTemplate,};