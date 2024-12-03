import {
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl,
    WordsThemes,
} from '@custom-types';

export type ItsMatch_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl
    answersQty:SettingsTemplateNumberValueControl
    theme:SettingsTemplateDependentValuesArr<WordsThemes | 'random'>,
}>;

export type ItsMatch_GameConfig = PartialGC;

export type ItsMatch_Config = {
    gameConfig:ItsMatch_GameConfig,
    settingsTemplate:ItsMatch_SettingsTemplate
};