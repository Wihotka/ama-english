import {InitialGameProps} from '@custom-types';
import {ItsMatch_GameConfig, ItsMatch_SettingsTemplate} from './../../type';

// Types Game

export type ContentP = {
    gamePlayData:ItsMatch_GamePlayData,
    gameData:ItsMatch_GameData

    handleVoice:HandleVoiceT,
    handleCheckingAnswer:HandleCheckingAnswerT
    handleSelectAnswer:HandleSelectOptionT
};

export type ItsMatchT = InitialGameProps<ItsMatch_GameConfig,
    ItsMatch_SettingsTemplate,
    ItsMatch_GameData,
    ItsMatch_GamePlayData>;

export type ItsMatchGameL1T = ItsMatchT['game'];

export type ItsMatch_GamePlayData = {
    correctAnswerQty:number
    mistakeQte:number,
    iteration:number,
    numberOptions:number,

    selectedVariant:{ answer:Variant | null, isCorrect:boolean | null },

    isVoicePlay:{
        typeCallField:TypeField | null,
        variant:Variant | null,
        isPlay:boolean
    },
    isActiveVerification:boolean,
    isAnimated:boolean,
    isFieldUpdate:boolean
};

export type ItsMatch_GameData = {
    readonly answersQty:number;
    readonly level:number;
    readonly arrayOptions:Array<Array<Variant>>;
};

export type WordItem = {
    word:string;
    transcription:string;
    soundUrl:string;
};

export type Variant = WordItem & {
    isCorrect:boolean
};

// Interface components

export interface AnswerListP {
    gameData:ItsMatch_GameData;
    gamePlayData:ItsMatch_GamePlayData;

    onVoicePlay:HandleVoiceT;
    handlerSelectAnswer:HandleSelectOptionT;
}

export interface InterfaceQuestionFieldP {
    gamePlayData:ItsMatch_GamePlayData;
    gameData:ItsMatch_GameData;
    onVoicePlay:HandleVoiceT,
}

export interface WordComponentP {
    variant:Variant;
    animation?:boolean;
    field:'question' | 'answer';
}

export interface AnswerItemL1P {
    variant:Variant;
    gamePlayData:ItsMatch_GamePlayData;

    handlerSelectAnswer:HandleSelectOptionT;
}

export interface AnswerItemL2P {
    variant:Variant;
    gamePlayData:ItsMatch_GamePlayData;

    onVoicePlay:HandleVoiceT;
    handlerSelectAnswer:HandleSelectOptionT;
}

// Types function

export type HandleVoiceT = (variant:Variant, field:TypeField) => void;
export type HandleCheckingAnswerT = () => void;
export type HandleSelectOptionT = (variant:Variant) => void;

export type OnVoicePlayT = (params:OnVoicePlayP) => void;

type OnVoicePlayP =
    { variant:Variant, field:TypeField }
    & Pick<ItsMatchT, 'speakTexts' | 'changeGPDOnline'>;

export type useCurrentStateGameP =
    Pick<ItsMatchT, 'speakTexts' | 'changeGPDOnline' | 'initFinishPlaying'> &
    Pick<ContentP, 'gameData' | 'gamePlayData'>;

export type useCurrentStateGameT = (params:useCurrentStateGameP) => void;

type OnCheckingAnswerP =
    { gameData:ItsMatch_GameData, gamePlayData:ItsMatch_GamePlayData }
    & Pick<ItsMatchT, 'changeGPDOnline'>;

export type OnCheckingAnswerT = (params:OnCheckingAnswerP) => void;

interface RandomGeneratorVariantsP {
    wordsArray:WordItem[];
    prevOptions?:Variant[];
}

export type RandomGeneratorVariantsT = (params:RandomGeneratorVariantsP) => Variant[];

type OnSelectOptionP = { variant:Variant }
    & Pick<ItsMatchT, 'changeGPDOnline'>
    & Pick<ItsMatch_GamePlayData, 'selectedVariant'>;

export type OnSelectOptionT = (params:OnSelectOptionP) => void;

// Enums

export enum TypeField {
    QUESTION,
    ANSWER,
}