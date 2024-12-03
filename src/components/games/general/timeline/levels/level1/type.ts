import {InitialGameProps} from '@custom-types';
import {Timeline_GameConfig, Timeline_SettingsTemplate} from '../../type';

export type ContentP = {
    gamePlayData:TimelineL1_GamePlayData,
    gameData:TimelineL1_GameData

    handleCheckingAnswer:HandleCheckingAnswer
    handleSelectOption:HandleSelectOption
};

//Types game data

export type TimelineL1T = InitialGameProps<Timeline_GameConfig,
    Timeline_SettingsTemplate,
    TimelineL1_GameData,
    TimelineL1_GamePlayData>;

export type TimelineGameL1T = TimelineL1T['game'];

export type TimelineL1_GamePlayData = {
    correctAnswerQty:number;
    mistakeQte:number,
    attemptsQte:number,
    numberOptions:number,
    iteration:number,

    selectedVariant:{ answer:string | null, isCorrect:boolean | null },

    isAnimated:boolean,
    isFieldUpdate:boolean,
    isActiveVerification:boolean
};

export type TimelineL1_GameData = {
    readonly level:number;
    readonly answersQty:number;

    readonly arrayOptions:Variant[];
};

export type Variant = {
    answers:Array<string>
    correctAnswer:string;
    mistakeAnswer:string;
    question:string;
};

// Interface components
export interface AnswerListP {
    gameData:TimelineL1_GameData;
    gamePlayData:TimelineL1_GamePlayData;

    handlerSelectOption:HandleSelectOption;
}

export interface InterfaceQuestionFieldP {
    gameData:TimelineL1_GameData;
    gamePlayData:TimelineL1_GamePlayData;
}

//Types functions
export type useCurrentStateGameP =
    Pick<TimelineL1T, 'speakTexts' | 'changeGPDOnline' | 'initFinishPlaying'> &
    Pick<ContentP, 'gameData' | 'gamePlayData'>;

export type HandleCheckingAnswer = () => void;
export type HandleSelectOption = (variant:string) => void;

type OnSelectOptionP = { variant:string }
    & Pick<TimelineL1T, 'changeGPDOnline'>
    & Pick<TimelineL1_GamePlayData, 'selectedVariant'>;

export type OnSelectOptionT = (params:OnSelectOptionP) => void;

export type useCurrentStateGameT = (params:useCurrentStateGameP) => void;

type OnCheckingAnswerP =
    { gamePlayData:TimelineL1_GamePlayData, gameData:TimelineL1_GameData }
    & Pick<TimelineL1T, 'changeGPDOnline'>;

export type OnCheckingAnswerT = (params:OnCheckingAnswerP) => void;

interface RandomGeneratorVariantsP {
    level:number,
    theme:TimelineGameL1T['gameSettings']['theme'],
    answersQty:number
}

export type RandomGeneratorVariantsT = (params:RandomGeneratorVariantsP) => Promise<Variant[]>;
