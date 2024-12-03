import {
    PartialGC,
    SettingsTemplate,
    navigationLocations,
    SettingsTemplateValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';

export type Navigation_SettingsTemplate = SettingsTemplate<{
    location:SettingsTemplateValuesArr<navigationLocations>,
    complexity:SettingsTemplateNumberValueControl
}>;

export type Navigation_GameConfig = PartialGC;

export type Navigation_Config = {
    gameConfig:Navigation_GameConfig;
    settingsTemplate:Navigation_SettingsTemplate;
};