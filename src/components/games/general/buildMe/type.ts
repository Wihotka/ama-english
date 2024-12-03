import {
    WordsThemes,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateToggle,
    SettingsTemplateNumberValueControl, SettingsTemplateValuesArr
} from '@custom-types';

export type BuildMe_SettingsTemplate = SettingsTemplate<{
    theme:SettingsTemplateValuesArr<WordsThemes | 'random'>,
    hint:SettingsTemplateToggle,
    answersQty:SettingsTemplateNumberValueControl
}>;

export type BuildMe_GameConfig = PartialGC;

export type BuildMe_Config = {
    gameConfig:BuildMe_GameConfig;
    settingsTemplate:BuildMe_SettingsTemplate;
};