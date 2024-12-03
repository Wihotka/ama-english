import {PartialGC, SettingsTemplate, SettingsTemplateNumberValueControl} from '@custom-types';

export type Checkpoint_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl
}>;

export type Checkpoint_GameConfig = PartialGC;

export type Checkpoint_Config = {
    gameConfig:Checkpoint_GameConfig;
    settingsTemplate:Checkpoint_SettingsTemplate;
};