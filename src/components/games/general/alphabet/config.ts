import {ControlNames} from '@custom-types';
import {
    Alphabet_Config,
    Alphabet_GameConfig,
    Alphabet_SettingsTemplate
} from './type';

const settingsTemplate:Alphabet_SettingsTemplate = {
    level: {
        min: 1,
        max: 3,
        step: 1,
        valueType: 1,
        disabledSettings: {
            1: ['speedInSeconds', 'lettersQty'],
            2: ['mode', 'lettersQty'],
            3: ['speedInSeconds', 'mode']
        }
    },
    letters: {
        values: ['capital', 'small', 'random'],
        valueType: '1',
        controlName: ControlNames['carousel']
    },
    mode: {
        values: ['beginner', 'easy', 'medium', 'hard', 'extreme'],
        valueType: '1',
        controlName: ControlNames['carousel']
    },
    speedInSeconds: {
        values: ['5', '4.5', '4', '3.5', '3', '2.5', '2', '1.5', '1'],
        valueType: '1',
        controlName: ControlNames['carousel'],
    },
    lettersQty: {
        min: 4,
        max: 6,
        step: 1,
        valueType: 1,
        controlName: ControlNames['inputNumber']
    }
};

export const timeResolver:{ [key:string]:Array<number> } = {
    beginner: [300, 360, 420],
    easy: [80, 90, 100],
    medium: [70, 80, 90],
    hard: [60, 70, 80],
    extreme: [50, 60, 70]
};

const gameConfig:Alphabet_GameConfig = {
    bgColor: {
        1: 'linear-gradient(0deg, rgba(214, 255, 251, 0.4) 26.83%, rgba(138, 251, 249, 0.4) 47.3%, rgba(79, 248, 247, 0.4) 62.39%, rgba(28, 191, 237, 0.4) 97.39%)',
        2: 'linear-gradient(1.74deg, #E0FFFF 9.84%, #6DBBFF 639.36%)'
    },
    displayedSettings: {
        1: ['letters', 'mode'],
        2: ['letters', 'speedInSeconds'],
        3: ['letters', 'lettersQty']
    },
    valuesThresholds: {
        1: [50, 70, 90],
        2: [10, 50, 90],
        3: [50, 70, 90]
    },
    birdsQty: 5
};

export const config:Alphabet_Config = {
    gameConfig, settingsTemplate
};
