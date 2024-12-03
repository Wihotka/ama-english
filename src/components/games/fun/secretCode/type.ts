import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateNumberValueControl,
    SettingsTemplateValuesArr,
} from '@custom-types/game';

export type SecretCodeT = InitialGameProps<
    SecretCode_GameConfig,
    SecretCode_SettingsTemplate,
    SecretCode_GameData,
    SecretCode_GamePlayData
>;

export type SecretCodeGameT = SecretCodeT['game'];

export type SecretCode_SettingsTemplate = SettingsTemplate<{
    complexity:SettingsTemplateNumberValueControl;
    mode:SettingsTemplateValuesArr<string>;
}>;

export type SecretCode_ComplexityResolver = {
    [key:number]:{ min:number; max:number };
};

export type SecretCode_ImagesPaths = {
    [key:string]:string;
};

export type SecretCode_GameConfig = PartialGC & {
    imagesPaths?:SecretCode_ImagesPaths;
};

export type SecretCode_Config = GameConfigConstructT<
    SecretCode_GameConfig,
    SecretCode_SettingsTemplate
>;

export type SecretCode_Task = {
    value:number;
    color:string;
}[];

export type SecretCode_Word = {
    word:string;
    soundUrl:string;
    task:SecretCode_Task;
};

export type SecretCode_AlphabetLetter = {
    letter:string;
    color:string;
};

export type SecretCode_GameData = {
    words:SecretCode_Word[];
    alphabet:SecretCode_AlphabetLetter[];
};

export type SecretCode_GamePlayData = {
    iterationCount:number;
    isMapOpen:boolean;
    userAnswers:string[];
    mistakesQty:number;
    mistakeIndexes:number[];
    highlight:boolean;
    correctAnswersQty:number;
    activeInputIndex:number;
};
