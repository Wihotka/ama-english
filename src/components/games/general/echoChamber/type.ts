import {PartialGC, SettingsTemplate, SettingsTemplateNumberValueControl} from '@custom-types';

export type EchoChamber_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    answersQty:SettingsTemplateNumberValueControl
}>;

export type EchoChamber_GameConfig = PartialGC;

export type EchoChamber_Config = {
    gameConfig:EchoChamber_GameConfig;
    settingsTemplate:EchoChamber_SettingsTemplate;
};