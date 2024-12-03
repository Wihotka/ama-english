import {PowerCouple_Config, PowerCouple_GameConfig, PowerCouple_SettingTemplate} from '@components/games/fun/powerCouple/type';
import {ControlNames, ThemePowerCouple} from '@custom-types';

const settingsTemplate:PowerCouple_SettingTemplate = {
    level: {
        min: 1,
        max: 1,
        step: 1,
        valueType: 1,
        needHideControl: true
    },
    theme: {
        valueType: ThemePowerCouple.homographs,
        values: [ThemePowerCouple.homographs,ThemePowerCouple.homophones],
        controlName: ControlNames.carousel
    },
    map: {
        min: 1,
        max: 7,
        step: 1,
        valueType: 1,
        controlName: ControlNames.carousel
    }
};

const gameConfig:PowerCouple_GameConfig = {
    bgColor: 'linear-gradient(0deg, #C7FFDF 31%, #5681FF 100%)',
    displayedSettings: ['theme', 'map'],
};

export const config:PowerCouple_Config = {
    gameConfig: gameConfig,
    settingsTemplate: settingsTemplate
};