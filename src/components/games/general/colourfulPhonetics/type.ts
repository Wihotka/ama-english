import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl,
} from '@custom-types/game';

export type ColourfulPhoneticsT = InitialGameProps<
    ColourfulPhonetics_GameConfig,
    ColourfulPhonetics_SettingsTemplate,
    ColourfulPhonetics_GameData,
    ColourfulPhonetics_GamePlayData
>;

export type ColourfulPhoneticsGameT = ColourfulPhoneticsT['game'];

export type ColourfulPhonetics_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl;
    picture:SettingsTemplateDependentValuesArr<ColourfulPhonetics_Picture>;
    complexity:SettingsTemplateNumberValueControl;
}>;

export type ColourfulPhonetics_GameConfig = PartialGC;

export type ColourfulPhonetics_Config = GameConfigConstructT<
    ColourfulPhonetics_GameConfig,
    ColourfulPhonetics_SettingsTemplate
>;

export enum ColourfulPhonetics_Picture {
    hungryBear = 'hungryBear',
    funnyCrocodile = 'funnyCrocodile',
    curiousMonkey = 'curiousMonkey',
    happyOctopus = 'happyOctopus',
    cuteFrog = 'cuteFrog',
    lovelyDragon = 'lovelyDragon',
    smartToucan = 'smartToucan',
    wonderfulUnicorn = 'wonderfulUnicorn',
    artisticOctopus = 'artisticOctopus',
    dangerousDragon = 'dangerousDragon',
    sweetTooth = 'sweetTooth',
    openSpace = 'openSpace',
}

export type ColourfulPhonetics_Marker = {
    color:string;
    transcription:string;
};

export type ColourfulPhonetics_Position = {
    top:number;
    left:number;
};

export type ColourfulPhonetics_TranscriptionPosition = {
    pos:ColourfulPhonetics_Position[];
    text:string;
};

export type ColourfulPhonetics_PictureData = {
    colorSchemes:string[][];
    correctColors:number[];
    transcriptionPositions:ColourfulPhonetics_Position[][];
    initialColors:string[][];
    colorAreas?:number[][];
    totalAnswers?:number;
};

export type ColourfulPhonetics_GameData = {
    colorPalette:ColourfulPhonetics_Marker[];
    colorScheme:string[];
    transcriptionPos:ColourfulPhonetics_TranscriptionPosition[];
    picture:ColourfulPhonetics_Picture;
    correctColors:number[];
    initialColors:string[];
    colorAreas?:number[][];
    totalAnswers?:number;
};

export type ColourfulPhonetics_GamePlayData = {
    currentColor:string | null;
    fillColors:string[];
    isSoundPlaying:boolean;
    pressedBtnIndex:number;
    correctAnswersQty:number;
    wrongAnswersQty:number;
    failedColor:string | null;
};
