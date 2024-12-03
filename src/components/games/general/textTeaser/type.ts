import {
    GameConfigConstructT,
    InitialGameProps,
    PartialGC,
    SettingsTemplate,
    SettingsTemplateNumberValueControl,
    SettingsTemplateToggle,
} from '@custom-types/game';

export type TextTeaserT = InitialGameProps<
    TextTeaser_GameConfig,
    TextTeaser_SettingsTemplate,
    TextTeaser_GameData,
    TextTeaser_GamePlayData
>;

export type TextTeaserGameT = TextTeaserT['game'];

export type TextTeaser_SettingsTemplate = SettingsTemplate<{
    course:SettingsTemplateNumberValueControl;
    hint:SettingsTemplateToggle;
}>;

export type TextTeaser_GameConfig = PartialGC & {};

export type TextTeaser_Config = GameConfigConstructT<
    TextTeaser_GameConfig,
    TextTeaser_SettingsTemplate
>;

export type TextTeaser_GameData = {
    maxMistakesQty:number;
    title:string;
    textParts:TextTeaser_TextPart[];
    isHintEnabled:boolean;
};

export type TextTeaser_GamePlayData = {
    mistakesQty:number;
    rightAnswersQty:number;
    textParts:TextTeaser_TextPart[];
    isCheckBtnDisabled:boolean;
    isHintUsed:boolean;
    highlight:boolean;
    isDragDisabled:boolean;
    isCorrect:boolean;
};

export type TextTeaser_TextPart = {
    text:string;
    correctPosition:number;
    isCorrect:boolean;
};
