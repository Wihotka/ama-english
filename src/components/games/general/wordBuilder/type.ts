import {
    WordsThemes,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateToggle,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';

export type WordBuilder_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<WordsThemes>,
    hint:SettingsTemplateToggle,
    answersQty:SettingsTemplateNumberValueControl
}>;

export type WordBuilder_GameConfig = PartialGC;

export type WordBuilder_Config = {
    gameConfig:WordBuilder_GameConfig;
    settingsTemplate:WordBuilder_SettingsTemplate;
};