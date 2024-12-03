import {
    PartialGC,
    WordsThemes,
    SettingsTemplate,
    SettingsTemplateToggle,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';

export type Wordpad_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<WordsThemes | 'random'>,
    hint:SettingsTemplateToggle,
    complexity:SettingsTemplateNumberValueControl,
    answersQty:SettingsTemplateNumberValueControl
}>;

export type Wordpad_GameConfig = PartialGC;

export type Wordpad_Config = {
    gameConfig:Wordpad_GameConfig;
    settingsTemplate:Wordpad_SettingsTemplate;
};