import {ControlNames} from '@custom-types/game';
import {MakeYourChoice_Config} from './type';

export const config:MakeYourChoice_Config = {
    gameConfig: {
        displayedSettings: ['level'],
        valuesThresholds: [33, 66, 100],
        bgColor: 'linear-gradient(0deg, rgba(255, 255, 97, 0.4) -41.35%, rgba(255, 90, 84, 0.4) 53.81%, rgba(137, 57, 207, 0.4) 100%), #FFFFFF'
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 2,
            step: 1,
            disabledSettings: {
                1: ['gameTime'],
                2: ['gameTime'],
            },
        },
        gameTime: {
            min: 60,
            max: 60,
            step: 1,
            controlName: ControlNames.inputNumber,
            needHideControl: true,
        },
    },
};
