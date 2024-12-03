import {
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl, ThemeTimeline
} from '@custom-types';

export type Timeline_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl
    answersQty:SettingsTemplateNumberValueControl
    theme:SettingsTemplateDependentValuesArr<ThemeTimeline>
}>;

export type Timeline_GameConfig = PartialGC;

export type Timeline_Config = {
    gameConfig:Timeline_GameConfig,
    settingsTemplate:Timeline_SettingsTemplate
};
