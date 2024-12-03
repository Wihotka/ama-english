import {
    PartialGC,
    SettingsTemplateNumberValueControl,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr, ThemeFruitSmoothie, SettingsTemplateValuesArr
} from '@custom-types';

export type FruitsSmoothie_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl
    theme:SettingsTemplateDependentValuesArr<ThemeFruitSmoothie>
    complexity:SettingsTemplateNumberValueControl
    speedInSeconds:SettingsTemplateValuesArr<string>
    answersQty:SettingsTemplateNumberValueControl
}>;

export type FruitsSmoothie_GameConfig = PartialGC & {
    rangeCoordinatesCentralPoint:{
        leftElements:{
            X:{ min:number, max:number },
            Y:{ min:number, max:number }
        },
        rightElements:{
            X:{ min:number, max:number },
            Y:{ min:number, max:number }
        }

    },
    finalHeightPosition:{ min:number, max:number }
    flyDelay:Array<number>
};

export type FruitsSmoothie_Config = {
    gameConfig:FruitsSmoothie_GameConfig,
    settingsTemplate:FruitsSmoothie_SettingsTemplate
};