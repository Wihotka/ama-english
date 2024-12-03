import {
    PartialGC, SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl
} from '@custom-types';
import {
    SettingsTemplate,
} from '@custom-types/game/settings';

export type WordBox_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl,
    theme:SettingsTemplateDependentValuesArr<string>,
    wordsQty:SettingsTemplateNumberValueControl,
    complexity:SettingsTemplateNumberValueControl
}>;

export type WordBox_ImagesPaths = {
    [key:string]:string
};

export type WordBox_GameConfig = PartialGC & {
    imagesPaths?:WordBox_ImagesPaths
};

export type WordBox_Config = {
    gameConfig:WordBox_GameConfig;
    settingsTemplate:WordBox_SettingsTemplate;
};

