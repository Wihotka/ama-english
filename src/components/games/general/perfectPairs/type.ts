import {
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl,
    WordsThemes,
} from '@custom-types';

export type PerfectPairs_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl
    answersQty:SettingsTemplateNumberValueControl
    theme:SettingsTemplateDependentValuesArr<WordsThemes | 'random'>,
}>;

export type PerfectPairs_GameConfig = PartialGC;

export type PerfectPairs_Config = {
    gameConfig:PerfectPairs_GameConfig,
    settingsTemplate:PerfectPairs_SettingsTemplate
};