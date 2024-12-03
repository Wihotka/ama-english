import {
    GameConfigConstructT,
    PartialGC,
    SettingsTemplate, SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl, ThemeGrammarMix
} from '@custom-types';

export type GrammarMix_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<ThemeGrammarMix>,
    answersQty:SettingsTemplateNumberValueControl,
}>;

export type GrammarMix_GameConfig = PartialGC;

export type GrammarMix_Config = GameConfigConstructT<GrammarMix_GameConfig, GrammarMix_SettingsTemplate>;

