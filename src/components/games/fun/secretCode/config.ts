import {ControlNames, GameImagesPaths} from '@custom-types/game';
import {
    SecretCode_ComplexityResolver,
    SecretCode_Config,
    SecretCode_ImagesPaths,
} from './type';

const gameImages:GameImagesPaths<SecretCode_ImagesPaths> = [
    {name: 'open', path: 'open', type: 'png'},
    {name: 'close', path: 'close', type: 'svg'},
];

export const config:SecretCode_Config = {
    gameConfig: {
        displayedSettings: ['complexity', 'mode'],
        valuesThresholds: [33, 66, 100],
        gameImages,
        bgColor: 'linear-gradient(150.05deg, #FCD3B0 -9.61%, #B9FDDC 106.15%)'
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 3,
            step: 1,
        },
        complexity: {
            min: 1,
            max: 3,
            step: 1,
            controlName: ControlNames.slider,
        },
        mode: {
            values: ['easy', 'hard'],
            controlName: ControlNames.carousel,
        },
    },
};

export const colors = [
    '#00E224',
    '#00E2D7',
    '#FAA500',
    '#5D63FF',
    '#A22CFF',
    '#F0009E',
];

export const complexityResolver:SecretCode_ComplexityResolver = {
    1: {min: 4, max: 5},
    2: {min: 6, max: 7},
    3: {min: 8, max: 10},
};
