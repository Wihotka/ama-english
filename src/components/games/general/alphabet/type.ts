import {
    PartialGC,
    SettingsTemplateNumberValueControl, SettingsTemplateValuesArr,
} from '@custom-types';
import {
    SettingsTemplate,
} from '@custom-types/game/settings';

export type Alphabet_SettingsTemplate = SettingsTemplate<{
    letters:SettingsTemplateValuesArr<string>,
    mode:SettingsTemplateValuesArr<string>,
    speedInSeconds:SettingsTemplateValuesArr<string>,
    lettersQty:SettingsTemplateNumberValueControl
}>;

export type Alphabet_GameConfig = PartialGC & { birdsQty:number };

export type Alphabet_Config = {
    gameConfig:Alphabet_GameConfig;
    settingsTemplate:Alphabet_SettingsTemplate;
};

