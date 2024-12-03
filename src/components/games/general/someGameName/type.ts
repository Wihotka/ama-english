import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC, SettingsTemplateNumberValueControl, SettingsTemplateToggle,
    SettingsTemplateValuesArr
} from '@custom-types';
import {SettingsTemplate} from '@custom-types/game/settings';

export type SomeGameNameT = InitialGameProps<
    SomeGameName_GameConfig, SomeGameName_SettingsTemplate,
    SomeGameName_GameData, SomeGameName_GamePlayData>;

export type SomeGameNameGameT = SomeGameNameT['game'];

export type SomeGameName_SettingsTemplate = SettingsTemplate<{
    letters:SettingsTemplateValuesArr<string>,
    complexity:SettingsTemplateValuesArr<number>,
    // mode:SettingsTemplateValuesArr<string>,
    speed:SettingsTemplateValuesArr<string>,
    toggle:SettingsTemplateToggle,
    answersQty:SettingsTemplateNumberValueControl,
    lettersQty:SettingsTemplateNumberValueControl,
    // gameTime:SettingsTemplateNumberValueControl;
}>;

export type SomeGameName_GameConfig = PartialGC;

export type SomeGameName_Config = GameConfigConstructT<SomeGameName_GameConfig, SomeGameName_SettingsTemplate>;

export type SomeGameName_GameData = {
    clicksQty:number;
    answersQty:number;
};

export type SomeGameName_GamePlayData = {
    clicksQty:number;
    counter:number;
};
