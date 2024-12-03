import {ControlNames} from '@custom-types';
import {EchoChamber_Config, EchoChamber_GameConfig, EchoChamber_SettingsTemplate} from './type';

const settingsTemplate:EchoChamber_SettingsTemplate = {
    level: {
        min: 1,
        max: 1,
        step: 1,
        valueType: 1,
        needHideControl: true
    },
    course: {
        min: 2,
        max: 4,
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

const gameConfig:EchoChamber_GameConfig = {
    bgColor: {
        2: 'linear-gradient(146.05deg, #BEBAFF -6.14%, #D7FFE3 109.76%)',
        3: 'linear-gradient(146.05deg, #FFB7B2 -6.14%, #FFEAEF 109.76%)',
        4: 'linear-gradient(146.05deg, #BEBAFF -6.14%, #D7FFE3 109.76%)'
    },
    displayedSettings: ['course', 'answersQty'],
    levelConfigs: {
        1: {playbackRate: 0.75}
    }
};

export const config:EchoChamber_Config = {
    gameConfig,
    settingsTemplate,
};