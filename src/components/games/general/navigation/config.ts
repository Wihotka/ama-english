import {Navigation_Config, Navigation_GameConfig, Navigation_SettingsTemplate} from './type';
import {ControlNames, navigationLocations} from '@custom-types';

const settingsTemplate:Navigation_SettingsTemplate = {
    level: {
        min: 1,
        max: 1,
        step: 1,
        valueType: 1,
        needHideControl: true
    },
    location: {
        values: [
            navigationLocations.livingRoom,
            navigationLocations.study,
            navigationLocations.kitchen,
            navigationLocations.aquapark,
            navigationLocations.classroom,
            navigationLocations.bedroom,
            navigationLocations.bathroom,
            navigationLocations.showroom
        ],
        valueType: navigationLocations.livingRoom,
        controlName: ControlNames.carousel
    },
    complexity: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    }
};

export const optionsQty = 6;
export const availableOptionsQty = 3;
export const maxMistakeQty = 2;

const gameConfig:Navigation_GameConfig = {
    bgColor: {
        3: 'linear-gradient(180deg, rgba(185, 237, 223, 0.24) 0%, rgba(176, 227, 225, 0.24) 13.03%, rgba(152, 200, 231, 0.24) 35.29%, rgba(112, 156, 241, 0.24) 64.06%, rgba(58, 95, 254, 0.24) 97.91%, rgba(54, 91, 255, 0.24) 100%), #FFFFFF',
        4: 'linear-gradient(180deg, rgba(185, 237, 223, 0.24) 0%, rgba(176, 227, 225, 0.24) 13.03%, rgba(152, 200, 231, 0.24) 35.29%, rgba(112, 156, 241, 0.24) 64.06%, rgba(58, 95, 254, 0.24) 97.91%, rgba(54, 91, 255, 0.24) 100%), #FFFFFF'
    },
    displayedSettings: ['location', 'complexity'],
    valuesThresholds: [50, 66, 83]
};

export const config:Navigation_Config = {
    gameConfig,
    settingsTemplate,
};