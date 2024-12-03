import {ControlNames} from '@custom-types/game';
import {Yesnt_Config} from './type';

export const config:Yesnt_Config = {
    gameConfig: {
        bgColor: {
            1: 'linear-gradient(146.05deg, #BCE8F1 -6.14%, #F5CABC 109.76%)',
            2: 'linear-gradient(146.05deg, #BCE8F1 -6.14%, #F5CABC 109.76%)',
            3: 'linear-gradient(146.05deg, #B2EEE7 -6.14%, #729ED2 109.76%)',
            4: 'linear-gradient(146.05deg, #BCE8F1 -6.14%, #F5CABC 109.76%)'
        },
        displayedSettings: ['course', 'answersQty'],
        valuesThresholds: [50, 70, 90],
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 2,
            step: 1
        },
        course: {
            min: 1,
            max: 4,
            step: 1,
            controlName: ControlNames.slider
        },
        answersQty: {
            min: 4,
            max: 6,
            step: 1,
            controlName: ControlNames.inputNumber
        }
    },
};
