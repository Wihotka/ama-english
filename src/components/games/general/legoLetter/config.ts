import {ControlNames} from '@custom-types';
import {
    LegoLetter_Config,
    LegoLetter_GameConfig,
    LegoLetter_SettingsTemplate
} from './type';

const settingsTemplate:LegoLetter_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1,
        disabledSettings: {
            1: [],
            2: ['letters']
        }
    },
    letters: {
        values: ['capital', 'small', 'random'],
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

const gameConfig:LegoLetter_GameConfig = {
    bgColor: {
        1: 'linear-gradient(176.77deg, #E7E3FF -11.71%, #E0DBFE -11.7%, #F9F8FF 111.71%)',
        2: 'linear-gradient(176.77deg, #68BBF9 -11.71%, #DBD5FE -11.7%, #E8FFD4 111.71%)'
    },
    displayedSettings: {
        1: ['answersQty', 'letters'],
        2: ['answersQty']
    },
    cardsMaxQty: 6
};

export const config:LegoLetter_Config = {
    gameConfig, settingsTemplate
};
