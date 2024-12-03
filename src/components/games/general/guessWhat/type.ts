import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateDependentValuesArr,
    SettingsTemplateNumberValueControl,
    SettingsTemplateToggle,
    WordsThemes,
} from '@custom-types/game';

export type GuessWhatT = InitialGameProps<
    GuessWhat_GameConfig,
    GuessWhat_SettingsTemplate,
    GuessWhat_GameData,
    GuessWhat_GamePlayData
>;
 
export type GuessWhatGameT = GuessWhatT['game'];

export type GuessWhat_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl;
    theme:SettingsTemplateDependentValuesArr<WordsThemes>;
    complexity:SettingsTemplateNumberValueControl;
    hint:SettingsTemplateToggle;
    answersQty:SettingsTemplateNumberValueControl;
}>;

export type GuessWhat_GameConfig = PartialGC & {
    wordsQtyResolver:GuessWhat_Resolver;
    maxMistakesResolver:GuessWhat_Resolver;
    descriptionResolver:GuessWhat_DescriptionResolver;
};

export type GuessWhat_Config = GameConfigConstructT<
    GuessWhat_GameConfig,
    GuessWhat_SettingsTemplate
>;

export type GuessWhat_Word = {
    description:string;
    img:string;
    word:string;
    soundUrl:string;
};

export type GuessWhat_Answer = {
    img:string;
    word:string;
};

export type GuessWhat_Resolver = {[k:number]:number};

export type GuessWhat_DescriptionResolver = {[k:number]:1|2};

export type GuessWhat_Task = {
    taskWord:GuessWhat_Word;
    answers:GuessWhat_Answer[];
};

export type GuessWhat_GameData = {
    taskData:GuessWhat_Task[];
    maxMistakesQty:number;
    isHintEnabled:boolean;
};

export type GuessWhat_GamePlayData = {
    firstTryCorrectAnswersQty:number;
    secondTryCorrectAnswersQty:number;
    currentQ:number;
    isCorrect:boolean;
    highlight:boolean;
    userAnswer:string;
    mistakesQty:number;
    isCheckBtnDisabled:boolean;
    isHintUsed:boolean;
    isFieldDisabled:boolean;
    hiddenAnswers:string[];
};
