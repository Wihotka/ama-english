import {
    PartialGC,
    WordsThemes,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';

export type BreakTheSpell_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<WordsThemes | 'random'>
    answersQty:SettingsTemplateNumberValueControl
}>;

export type BreakTheSpell_GameConfig = PartialGC;

export type BreakTheSpell_Config = {
    gameConfig:BreakTheSpell_GameConfig;
    settingsTemplate:BreakTheSpell_SettingsTemplate;
};