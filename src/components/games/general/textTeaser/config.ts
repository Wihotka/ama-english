import {ControlNames} from '@custom-types/game';
import {TextTeaser_Config} from './type';

export const config:TextTeaser_Config = {
    gameConfig: {
        bgColor: {
            2: 'linear-gradient(146.05deg, #FFE58C -6.14%, #FFB671 109.76%)',
            3: 'linear-gradient(146.05deg, #D1FDF8 -6.14%, #ACD25E 109.76%)',
            4: 'linear-gradient(146.05deg, #FFE4F2 -6.14%, #DDFFB1 109.76%)'
        },
        displayedSettings: ['course', 'hint'],
        valuesThresholds: [33, 66, 100],
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 2,
            step: 1
        },
        course: {
            min: 2,
            max: 4,
            step: 1,
            controlName: ControlNames.slider
        },
        hint: {
            min: 0,
            max: 1,
            step: 1,
            controlName: ControlNames.toggle
        },
    },
};
