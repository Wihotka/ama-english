import {
    PartialGC,
    WordsThemes,
    SettingsTemplate,
    SettingsTemplateValuesArr,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';

export type AirWord_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<WordsThemes>,
    planesQty:SettingsTemplateNumberValueControl,
    speedInSeconds:SettingsTemplateValuesArr<string>
    answersQty:SettingsTemplateNumberValueControl
}>;

export type AirWord_GameConfig = PartialGC;

export type AirWord_Config = {
    gameConfig:AirWord_GameConfig;
    settingsTemplate:AirWord_SettingsTemplate;
};