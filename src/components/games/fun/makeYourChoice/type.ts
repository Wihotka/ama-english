import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateNumberValueControl,
} from '@custom-types/game';

export type MakeYourChoiceT = InitialGameProps<
    MakeYourChoice_GameConfig,
    MakeYourChoice_SettingsTemplate,
    MakeYourChoice_GameData,
    MakeYourChoice_GamePlayData
>;

export type MakeYourChoiceGameT = MakeYourChoiceT['game'];

export type MakeYourChoice_SettingsTemplate = SettingsTemplate<{
    gameTime:SettingsTemplateNumberValueControl & { needHideControl:boolean };
}>;

export type MakeYourChoice_GameConfig = PartialGC;

export type MakeYourChoice_Config = GameConfigConstructT<
    MakeYourChoice_GameConfig,
    MakeYourChoice_SettingsTemplate
>;

export type MakeYourChoice_Word = {
    word:string;
    img?:string;
    answers:MakeYourChoice_Answer[];
};

export type MakeYourChoice_Answer = {
    isCorrect:boolean;
    answer:string;
};

export type MakeYourChoice_GameData = {
    wordsData:MakeYourChoice_Word[];
};

export type MakeYourChoice_GamePlayData = {
    currentQ:number;
    score:number;
    pointsPerAnswer:number;
    streak:number;
    btnIndex:number;
    highlight:boolean;
    isCorrectAnswer:boolean;
    correctAnswersQty:number;
    isAnswerBtnPressed:boolean;
};
