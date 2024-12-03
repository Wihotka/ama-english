import {ControlNames} from '@custom-types/game';
import {ColourfulPhonetics_Config, ColourfulPhonetics_Picture} from './type';

export const config:ColourfulPhonetics_Config = {
    gameConfig: {
        displayedSettings: ['course', 'picture', 'complexity'],
        valuesThresholds: [33, 66, 100],
        levelsWithHiddenTimer: [1, 2],
        needHideProgressBar: false,
        bgColor: {
            1: 'linear-gradient(0deg, rgba(211, 187, 255, 0.24), rgba(211, 187, 255, 0.24)), #FFFFFF',
            2: 'linear-gradient(0deg, rgba(136, 184, 255, 0.24), rgba(136, 184, 255, 0.24)), #FFFFFF',
            3: 'linear-gradient(0deg, rgba(150, 243, 215, 0.24), rgba(150, 243, 215, 0.24)), #FFFFFF'
        }
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 2,
            step: 1
        },
        course: {
            min: 1,
            max: 3,
            step: 1,
            controlName: ControlNames.slider,
        },
        picture: {
            dependentFrom: 'course',
            dependentValues: {
                1: [
                    ColourfulPhonetics_Picture.hungryBear,
                    ColourfulPhonetics_Picture.funnyCrocodile,
                    ColourfulPhonetics_Picture.curiousMonkey,
                    ColourfulPhonetics_Picture.happyOctopus,
                    ColourfulPhonetics_Picture.cuteFrog,
                    ColourfulPhonetics_Picture.lovelyDragon,
                ],
                2: [
                    ColourfulPhonetics_Picture.hungryBear,
                    ColourfulPhonetics_Picture.funnyCrocodile,
                    ColourfulPhonetics_Picture.curiousMonkey,
                    ColourfulPhonetics_Picture.happyOctopus,
                    ColourfulPhonetics_Picture.cuteFrog,
                    ColourfulPhonetics_Picture.lovelyDragon,
                ],
                3: [
                    ColourfulPhonetics_Picture.smartToucan,
                    ColourfulPhonetics_Picture.wonderfulUnicorn,
                    ColourfulPhonetics_Picture.artisticOctopus,
                    ColourfulPhonetics_Picture.dangerousDragon,
                    ColourfulPhonetics_Picture.sweetTooth,
                    ColourfulPhonetics_Picture.openSpace,
                ],
            },
            controlName: ControlNames.carousel,
        },
        complexity: {
            min: 1,
            max: 3,
            step: 1,
            controlName: ControlNames.slider,
        },
    },
};
