import {
    PartialGC,
    SettingsTemplate,
    ClickItEasyThemes,
    SettingsTemplateValuesArr,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl,
} from '@custom-types';

export type ClickItEasy_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<ClickItEasyThemes>,
    sentenceType:SettingsTemplateValuesArr<string>,
    complexity:SettingsTemplateNumberValueControl,
    answersQty:SettingsTemplateNumberValueControl
}>;

export type ClickItEasy_GameConfig = PartialGC;

export type ClickItEasy_Config = {
    gameConfig:ClickItEasy_GameConfig;
    settingsTemplate:ClickItEasy_SettingsTemplate;
};