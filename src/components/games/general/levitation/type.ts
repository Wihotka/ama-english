import {
    WordsThemes,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';

export type Levitation_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<WordsThemes>,
    speed:SettingsTemplateNumberValueControl,
    feathersQty:SettingsTemplateNumberValueControl,
    answersQty:SettingsTemplateNumberValueControl
}>;

export type Levitation_GameConfig = PartialGC;

export type Levitation_Config = {
    gameConfig:Levitation_GameConfig;
    settingsTemplate:Levitation_SettingsTemplate;
};