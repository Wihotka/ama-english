import {
    SomeGameName_Config
} from './type';
import {ControlNames} from '@custom-types';

export const config:SomeGameName_Config = {
    gameConfig: {
        displayedSettings: ['answersQty', 'dataComplexity', 'lettersQty', 'complexity', 'numbersInExample', 'lettersQty'],
        // isCenterContainer: true,
        // valuesThresholds: {
        //     1: [10, 20, 30]
        // }
        bgColor: {
            1: 'red',
            2: 'blue'
        }
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 3,
            step: 1,
            disabledSettings: {
                1: ['answersQty', 'lettersQty', 'letters', 'complexity', 'speed', 'toggle',],
            }
        },
        answersQty: {
            min: 1,
            max: 10,
            step: 1,
        },
        lettersQty: {
            min: 1,
            max: 5,
            step: 1,
        },
        letters: {
            values: ['capital', 'small', 'random'],
            controlName: ControlNames['radio']
        },
        complexity: {
            values: [1, 2, 3, 4],
        },
        speed: {
            values: ['capital', 'small', 'random'],
            controlName: ControlNames['carousel'],
        },
        toggle: {
            min: 0,
            max: 1,
            step: 1,
            // controlName: ControlNames['toggle']
        }
    },
};
