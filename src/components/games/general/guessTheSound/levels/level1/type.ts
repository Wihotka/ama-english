import {InitialGameProps} from '@custom-types';
import {GuessTheSound_GameConfig, GuessTheSound_SettingsTemplate} from './../../type';

export type ContentP = {
    gamePlayData:GuessTheSoundL1_GamePlayData,
    gameData:GuessTheSoundL1_GameData

    handleVoice:HandleVoice,
    handleCheckingAnswer:HandleCheckingAnswer
    handlerSelectAnswer:HandleSelectOption;
};

//Types game data

export type GuessTheSoundL1T = InitialGameProps<GuessTheSound_GameConfig,
    GuessTheSound_SettingsTemplate,
    GuessTheSoundL1_GameData,
    GuessTheSoundL1_GamePlayData>;

export type GuessTheSoundGameL1T = GuessTheSoundL1T['game'];

export type GuessTheSoundL1_GamePlayData = {
    correctAnswerQty:{
        firstTry:number,
        secondTry:number
    }
    mistakeQte:number,
    attemptsQte:number,
    numberOptions:number,
    iteration:number,

    selectedVariant:{ answer:string | null, isCorrect:boolean | null },

    isVoicePlay:{
        typeCallField:TypeField | null,
        transcription:string | null,
        isPlay:boolean
    },
    isAnimated:boolean,
    isFieldUpdate:boolean,
    isActiveVerification:boolean
};

export type GuessTheSoundL1_GameData = {
    readonly level:number;
    readonly answersQty:number;

    readonly arrayOptions:Variant[][];
    readonly studyStage?:number;
};

export type WordItem = {
    word:string;
    dividedTranscription:Array<string>;
    dividedWord:Array<string>;
};

export type Variant = WordItem & {
    selectedTranscription:string;
    indexSelectedTranscription:number;
    isCorrect:boolean
};

// Interface components
export interface AnswerListP {
    gameData:GuessTheSoundL1_GameData;
    gamePlayData:GuessTheSoundL1_GamePlayData;

    onVoicePlay:HandleVoice;
    handlerSelectAnswer:HandleSelectOption;
}

export interface InterfaceQuestionFieldP {
    gameData:GuessTheSoundL1_GameData;
    gamePlayData:GuessTheSoundL1_GamePlayData;
    onVoicePlay:HandleVoice,
}

export interface WordComponentP {
    variant:Variant;
    animation?:boolean;
    field:'question' | 'answer';
    studyStage?:number;
    level?:number;
}

export interface AnswerItemLevel1_3P {
    variant:Variant;
    level:number;
    gamePlayData:GuessTheSoundL1_GamePlayData;
    studyStage?:number;

    handlerSelectAnswer:HandleSelectOption;
}

export interface AnswerItemType2P {
    variant:Variant;
    gamePlayData:GuessTheSoundL1_GamePlayData;

    handlerSelectAnswer:HandleSelectOption;
    onVoicePlay:HandleVoice;
}

//Types functions
export type useCurrentStateGameP =
    Pick<GuessTheSoundL1T, 'speakTexts' | 'changeGPDOnline' | 'initFinishPlaying'> &
    Pick<ContentP, 'gameData' | 'gamePlayData'>;

export type HandleVoice = (sound:string, field:TypeField) => void;
export type HandleCheckingAnswer = () => void;
export type HandleSelectOption = (variant:Variant) => void;

type OnSelectOptionP = { variant:Variant }
    & Pick<GuessTheSoundL1T, 'changeGPDOnline'>
    & Pick<GuessTheSoundL1_GamePlayData, 'selectedVariant'>;

export type OnSelectOptionT = (params:OnSelectOptionP) => void;

export type OnVoicePlayT = (params:OnVoicePlayP) => void;

type OnVoicePlayP =
    { sound:string, field:TypeField }
    & Pick<GuessTheSoundL1T, 'speakTexts' | 'changeGPDOnline'>;

export type useCurrentStateGameT = (params:useCurrentStateGameP) => void;

type OnCheckingAnswerP =
    { gamePlayData:GuessTheSoundL1_GamePlayData, gameData:GuessTheSoundL1_GameData }
    & Pick<GuessTheSoundL1T, 'changeGPDOnline'>;

export type OnCheckingAnswerT = (params:OnCheckingAnswerP) => void;

interface RandomGeneratorVariantsP {
    wordsArray:WordItem[],
    transcriptionArray:string[],
    prevOptions?:Variant[],
}

export type RandomGeneratorVariantsT = (params:RandomGeneratorVariantsP) => Variant[];

interface SelectedIndexSoundInWordP {
    wordObj:WordItem,
    transcription:string
}

export type SelectedIndexSoundInWordT = (params:SelectedIndexSoundInWordP) => number;

// Enums

export enum TypeField {
    QUESTION,
    ANSWER,
}