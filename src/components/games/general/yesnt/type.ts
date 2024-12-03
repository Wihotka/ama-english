import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateNumberValueControl,
} from '@custom-types/game';

export type YesntT = InitialGameProps<
    Yesnt_GameConfig,
    Yesnt_SettingsTemplate,
    Yesnt_GameData,
    Yesnt_GamePlayData
>;
 
export type YesntGameT = YesntT['game'];

export type Yesnt_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl;
    answersQty:SettingsTemplateNumberValueControl;
}>;

export type Yesnt_GameConfig = PartialGC;

export type Yesnt_Config = GameConfigConstructT<
    Yesnt_GameConfig,
    Yesnt_SettingsTemplate
>;

export type Yesnt_TaskQuestion = {
    question:string;
    correctAnswer:boolean;
};

export type Yesnt_Level1Task = {
    textTitle:string;
    taskText:string;
    taskQuestions:Yesnt_TaskQuestion[];
};

export type Yesnt_Level2Task = {
    img:string;
    taskQuestion:Yesnt_TaskQuestion;
};

export type Yesnt_GameData = {
    taskData:Yesnt_Level1Task | Yesnt_Level2Task[]
};

export type Yesnt_GamePlayData = {
    correctAnswersQty:number;
    currentQ:number;
    userAnswer:boolean;
    isCorrect:boolean;
    highlight:'true' | 'false' | null;
    isCheckBtnDisabled:boolean;
    isTaskBtnDisabled:boolean;
    chosenBtn:'true' | 'false' | null;
};
