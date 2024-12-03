import {
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl, SettingsTemplateToggle, ThemePhraseJumping,
} from '@custom-types';

export type PhraseJumping_SettingTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl
    theme:SettingsTemplateDependentValuesArr<ThemePhraseJumping>
    hint:SettingsTemplateToggle
    answersQty:SettingsTemplateNumberValueControl
}>;

export type PhraseJumping_GameConfig = PartialGC;

export type PhraseJumping_Config = {
    gameConfig:PhraseJumping_GameConfig,
    settingsTemplate:PhraseJumping_SettingTemplate
};

