import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateValuesArr,
} from '@custom-types/game';
import {StorytellerLocalData} from '@lib/game/utils/game-local-data-loader/types';

export type StorytellerT = InitialGameProps<
    Storyteller_GameConfig,
    Storyteller_SettingsTemplate,
    Storyteller_GameData,
    Storyteller_GamePlayData
>;

export type StorytellerGameT = StorytellerT['game'];

export type StoryTypeT = keyof typeof StorytellerLocalData;

export type Storyteller_SettingsTemplate = SettingsTemplate<{
    storyType:SettingsTemplateValuesArr<StoryTypeT>;
}>;

export type Storyteller_GameConfig = PartialGC;

export type Storyteller_Config = GameConfigConstructT<
    Storyteller_GameConfig,
    Storyteller_SettingsTemplate
>;

export type Storyteller_Answer = {
    value:string;
    imgPath:string;
};

export type Storyteller_UserAnswer = Storyteller_Answer | null;

export type Storyteller_Question = {
    questionText:string;
    answers:Storyteller_Answer[];
};

export type Storyteller_GameData = {
    gameQuestions:Storyteller_Question[];
    gameText:string;
    imageBg:string;
    storyTitle:string;
};

export type Storyteller_GamePlayData = {
    currentQuestion:number;
    userAnswers:Storyteller_UserAnswer[];
    storyText:string;
    isCompleted:boolean;
};
