import {
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl,
    SettingsTemplateToggle,
    SettingsTemplateValuesArr,
    WordsThemes
} from '@custom-types';

export type LostTwins_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl;
    theme:SettingsTemplateDependentValuesArr<WordsThemes | 'random'>,
    fieldSize:SettingsTemplateValuesArr<string>;
    mode:SettingsTemplateValuesArr<string>,
    hint:SettingsTemplateToggle
}>;

export type LostTwins_GameConfig = PartialGC;

export type LostTwins_Config = {
    gameConfig:LostTwins_GameConfig,
    settingsTemplate:LostTwins_SettingsTemplate
};
