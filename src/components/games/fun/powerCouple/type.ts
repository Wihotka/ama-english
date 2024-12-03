import {
    PartialGC,
    SettingsTemplate,
    SettingsTemplateNumberValueControl,
    SettingsTemplateValuesArr,
    ThemePowerCouple
} from '@custom-types';

export type PowerCouple_SettingTemplate = SettingsTemplate<{
    theme:SettingsTemplateValuesArr<ThemePowerCouple>,
    map:SettingsTemplateNumberValueControl,
}>;

export type PowerCouple_GameConfig = PartialGC;

export type PowerCouple_Config = {
    gameConfig:PowerCouple_GameConfig,
    settingsTemplate:PowerCouple_SettingTemplate
};