import {
    PartialGC, SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';
import {
    SettingsTemplate,
} from '@custom-types/game/settings';

export type WorndNLetters_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<string>,
    answersQty:SettingsTemplateNumberValueControl,
    complexity:SettingsTemplateNumberValueControl
}>

export type WorndNLetters_ImagesPaths = {
    [key:string]:string
};

export type WorndNLetters_GameConfig = PartialGC

export type WorndNLetters_Config = {
    gameConfig:WorndNLetters_GameConfig;
    settingsTemplate:WorndNLetters_SettingsTemplate;
};

