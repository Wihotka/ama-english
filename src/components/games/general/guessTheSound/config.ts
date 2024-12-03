import {
    GuessTheSound_Config,
    GuessTheSound_GameConfig,
    GuessTheSound_SettingsTemplate
} from '@components/games/general/guessTheSound/type';
import {ControlNames} from '@custom-types';

const settingsTemplate:GuessTheSound_SettingsTemplate = {
    level: {
        min: 1,
        max: 3,
        step: 1,
        valueType: 1,
    },

    course: {
        min: 1,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
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
        valueType: 1,
        controlName: ControlNames.inputNumber
    }

};

const gameConfig:GuessTheSound_GameConfig = {
    bgColor: {
        1: 'linear-gradient(43.59deg, #2BC0E4 -2.46%, #EAECC6 77.17%)',
        2: 'linear-gradient(146.05deg, #96EEE6 -6.14%, #9DE988 109.76%)',
        3: 'linear-gradient(146.05deg, #96EEE6 -6.14%, #9DE988 109.76%)',
        4: 'linear-gradient(146.05deg, #FFD3AB -6.14%, #D67EF2 109.76%)'
    },

    displayedSettings: ['course', 'complexity', 'answersQty']
};

export const config:GuessTheSound_Config = {
    settingsTemplate, gameConfig
};