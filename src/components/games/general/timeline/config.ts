import {Timeline_Config, Timeline_GameConfig, Timeline_SettingsTemplate} from '@components/games/general/timeline/type';
import {ControlNames, ThemeTimeline} from '@custom-types';

const settingsTemplate:Timeline_SettingsTemplate = {
    level: {
        min: 1,
        max: 2,
        step: 1,
        valueType: 1
    },
    course: {
        min: 1,
        max: 4,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    theme: {
        valueType: ThemeTimeline.presentSimple,
        dependentFrom: 'course',
        dependentValues: {
            1: [
                ThemeTimeline.presentSimple
            ],
            2: [
                ThemeTimeline.presentSimple,
                ThemeTimeline.presentContinuous,
                ThemeTimeline.pastSimple
            ],
            3: [
                ThemeTimeline.presentSimple,
                ThemeTimeline.presentContinuous,
                ThemeTimeline.pastSimple,
                ThemeTimeline.presentPerfect,
                ThemeTimeline.futureSimple,
                ThemeTimeline.beGoingTo
            ],
            4: [
                ThemeTimeline.presentSimple,
                ThemeTimeline.presentContinuous,
                ThemeTimeline.pastSimple,
                ThemeTimeline.presentPerfect,
                ThemeTimeline.futureSimple,
                ThemeTimeline.pastContinuous
            ]
        },
        controlName: ControlNames.carousel
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 1,
        controlName: ControlNames.inputNumber
    }
};

const gameConfig:Timeline_GameConfig = {
    bgColor: {
        1: 'linear-gradient(184.04deg, rgba(255, 171, 46, 0.4) -12.79%, rgba(255, 84, 84, 0.4) 49.97%, rgba(137, 57, 207, 0.4) 102.11%), #FFFFFF',
        2: 'linear-gradient(184.04deg, rgba(255, 171, 46, 0.4) -12.79%, rgba(255, 84, 84, 0.4) 49.97%, rgba(137, 57, 207, 0.4) 102.11%), #FFFFFF',
        3: 'linear-gradient(146.05deg, #75AB59 -6.14%, #BFCA4D 109.76%)',
        4: 'linear-gradient(184.04deg, rgba(255, 163, 130, 0.4) -12.79%, rgba(100, 182, 248, 0.4) 49.97%, rgba(248, 84, 255, 0.4) 102.11%), #FFFFFF'
    },
    displayedSettings: ['course', 'complexity', 'answersQty']
};

export const config:Timeline_Config = {
    settingsTemplate, gameConfig
};