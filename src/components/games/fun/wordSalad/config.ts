import {
    WordSalad_Config,
    WordSalad_GameConfig, WordSalad_ImagesPaths,
    WordSalad_SettingsTemplate
} from './type';
import {GameImagesPaths} from '@custom-types';

const settingsTemplate:WordSalad_SettingsTemplate = {
    level: {
        min: 1,
        max: 1,
        step: 1,
        valueType: 1,
        needHideControl: true
    },
    gameTime: {
        min: 60,
        max: 300,
        step: 30,
        valueType: 1
    }
};

const gameImages:GameImagesPaths<WordSalad_ImagesPaths> = [
    {
        name: 'cancel',
        path: 'cancel',
        type: 'png'
    },
    {
        name: 'renew',
        path: 'renew',
        type: 'png'
    }
];

const gameConfig:WordSalad_GameConfig = {
    bgColor: 'linear-gradient(146.05deg, #CDECA6 -6.14%, #FFCCDB 109.76%)',
    displayedSettings: ['gameTime'],
    gameImages
};

export const config:WordSalad_Config = {
    gameConfig, settingsTemplate
};
