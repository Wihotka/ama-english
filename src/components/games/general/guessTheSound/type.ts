import {PartialGC, SettingsTemplate, SettingsTemplateNumberValueControl} from '@custom-types';

export type GuessTheSound_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl
    complexity:SettingsTemplateNumberValueControl
    answersQty:SettingsTemplateNumberValueControl
}>;

export type GuessTheSound_GameConfig = PartialGC;

export type GuessTheSound_Config = {
    gameConfig:GuessTheSound_GameConfig,
    settingsTemplate:GuessTheSound_SettingsTemplate
};