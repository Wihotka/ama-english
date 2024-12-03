import {
    InitialGameProps,
    PartialGC,
    SettingsTemplateNumberValueControl,
} from '@custom-types';
import {
    SettingsTemplate,
} from '@custom-types/game/settings';

export type WordSaladT = InitialGameProps<WordSalad_GameConfig,
    WordSalad_SettingsTemplate,
    WordSalad_GameData,
    WordSalad_GamePlayData>;

export type WordSaladGameT = WordSaladT['game'];

export type WordSalad_SettingsTemplate = SettingsTemplate<{
    gameTime:SettingsTemplateNumberValueControl
}>;

export type WordSalad_ImagesPaths = {
    [key:string]:string
};

export type WordSalad_GameConfig = PartialGC & {
    imagesPaths?:WordSalad_ImagesPaths
};

export type WordSalad_Config = {
    gameConfig:WordSalad_GameConfig;
    settingsTemplate:WordSalad_SettingsTemplate;
};

export type WordSalad_GameData = {
    letters:Array<string>,
    alphabet:Array<string>,
    words:Array<string>
};

export type WordSalad_GamePlayData = {
    letters:Array<string>,
    selectedWords:Array<{
        word:string,
        scores:number
    }>,
    inputIndexes:Array<number>,
    answerStatus:'correct' | 'wrong' | null,
    gameIsActive:boolean
};
