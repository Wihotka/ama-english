import {
    FruitsSmoothie_Config,
    FruitsSmoothie_GameConfig,
    FruitsSmoothie_SettingsTemplate
} from '@components/games/general/fruitSmoothie/type';

import {ControlNames, ThemeFruitSmoothie} from '@custom-types';

const settingsTemplate:FruitsSmoothie_SettingsTemplate = {
    level: {
        min: 1,
        max: 3,
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
        dependentFrom: 'course',
        valueType: ThemeFruitSmoothie.toBe,
        dependentValues: {
            1: [
                ThemeFruitSmoothie.toBe,
                ThemeFruitSmoothie.pronouns,
                ThemeFruitSmoothie.number,
                ThemeFruitSmoothie.verbForms
            ],
            2: [
                ThemeFruitSmoothie.toBe,
                ThemeFruitSmoothie.pronouns,
                ThemeFruitSmoothie.number,
                ThemeFruitSmoothie.verbForms,
                ThemeFruitSmoothie.countableUncountable,
                ThemeFruitSmoothie.muchMany
            ],
            3: [
                ThemeFruitSmoothie.verbForms,
                ThemeFruitSmoothie.countableUncountable,
                ThemeFruitSmoothie.muchMany,
                ThemeFruitSmoothie.regularIrregularVerbs
            ],
            4: [
                ThemeFruitSmoothie.verbForms,
                ThemeFruitSmoothie.countableUncountable,
                ThemeFruitSmoothie.muchMany,
                ThemeFruitSmoothie.regularIrregularVerbs,
                ThemeFruitSmoothie.timeMarkersPresent
            ]
        },
        disabledSettings: {
            'toBe': ['complexity'],
            'pronouns': ['complexity'],
            'number': ['complexity'],
            'verbForms': [],
            'countableUncountable': ['complexity'],
            'muchMany': ['complexity'],
            'regularIrregularVerbs': ['complexity'],
            'timeMarkersPresent': ['complexity']
        },
        controlName: ControlNames.carousel
    },
    complexity: {
        min: 1,
        max: 3,
        step: 1,
        valueType: 1,
        controlName: ControlNames.slider
    },
    speedInSeconds: {
        values: ['10', '9', '8', '7', '6'],
        valueType: '1',
        controlName: ControlNames['carousel']
    },
    answersQty: {
        min: 4,
        max: 10,
        step: 1,
        valueType: 4,
        controlName: ControlNames.inputNumber
    }
};

const gameConfig:FruitsSmoothie_GameConfig = {
    finalHeightPosition: {min: 5, max: 10},
    rangeCoordinatesCentralPoint: {
        leftElements: {
            X: {min: 70, max: 80},
            Y: {min: 200, max: 250}
        },

        rightElements: {
            X: {min: 20, max: 30},
            Y: {min: 200, max: 250}
        }

    },
    flyDelay: [0.1, 0.2, 0.3],
    displayedSettings: ['course', 'theme', 'answersQty'],
    bgColor: {
        1: 'linear-gradient(146.05deg, #C3AAF4 -6.14%, #EEE4AA 109.76%)',
        2: 'linear-gradient(146.05deg, #C3AAF4 -6.14%, #EEE4AA 109.76%)',
        3: 'linear-gradient(146.05deg, #64A27D -6.14%, #A2CEC5 109.76%)',
        4: 'linear-gradient(146.05deg, #64A27D -6.14%, #A2CEC5 109.76%)'
    }
};

export const config:FruitsSmoothie_Config = {
    gameConfig: gameConfig,
    settingsTemplate: settingsTemplate
};