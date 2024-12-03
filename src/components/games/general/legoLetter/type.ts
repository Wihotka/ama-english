import {
    PartialGC,
    SettingsTemplateNumberValueControl, SettingsTemplateValuesArr,
} from '@custom-types';
import {
    SettingsTemplate,
} from '@custom-types/game/settings';

export type LegoLetter_SettingsTemplate = SettingsTemplate<{
    letters:SettingsTemplateValuesArr<string>,
    answersQty:SettingsTemplateNumberValueControl
}>;

export type LegoLetter_GameConfig = PartialGC & {
    cardsMaxQty:number
};

export type LegoLetter_Config = {
    gameConfig:LegoLetter_GameConfig;
    settingsTemplate:LegoLetter_SettingsTemplate;
};

