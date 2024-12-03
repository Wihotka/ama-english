import {ControlNames, GameImagesPaths} from '@custom-types/game';
import {SortOut_Config, SortOut_ImagesPaths} from './type';

const gameImages:GameImagesPaths<SortOut_ImagesPaths> = [
    {name: 'phonebg', path: 'phonebg', type: 'png'},
];

export const config:SortOut_Config = {
    gameConfig: {
        bgColor: {
            1: 'linear-gradient(146.05deg, #C9F0CC -6.14%, #D4E499 109.76%)',
            2: 'linear-gradient(146.05deg, #C9F0CC -6.14%, #D4E499 109.76%)'
        },
        displayedSettings: ['complexity', 'fieldSize', 'answersQty'],
        valuesThresholds: [50, 70, 90],
        gameImages,
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 1,
            step: 1,
            needHideControl: true,
        },
        complexity: {
            min: 1,
            max: 3,
            step: 1,
            controlName: ControlNames.slider
        },
        fieldSize: {
            values: ['4x3','4x4','4x5'],
            controlName: ControlNames.carousel
        },
        answersQty: {
            min: 4,
            max: 10,
            step: 1,
            controlName: ControlNames.inputNumber
        }
    },
};
