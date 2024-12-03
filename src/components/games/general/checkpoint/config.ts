import {ControlNames} from '@custom-types';
import {Checkpoint_Config, Checkpoint_GameConfig, Checkpoint_SettingsTemplate} from './type';

const settingsTemplate:Checkpoint_SettingsTemplate = {
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
    }
};

const gameConfig:Checkpoint_GameConfig = {
    bgColor: {
        1: 'linear-gradient(146.05deg, #EFD6C0 -6.14%, #E8C48C 109.76%)',
        2: 'linear-gradient(146.05deg, #B4DDD6 -6.14%, #83CABF 109.76%)',
        3: 'linear-gradient(146.05deg, #DAC9EA -6.14%, #C6A8E8 109.76%)',
        4: 'linear-gradient(146.05deg, #C2FFDA -6.14%, #6EEDA0 109.76%)'
    },
    displayedSettings: ['level', 'course'],
};

export const config:Checkpoint_Config = {
    gameConfig,
    settingsTemplate,
};