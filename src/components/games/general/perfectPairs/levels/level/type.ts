import {InitialGameProps} from '@custom-types';
import {SpeakTexts} from '@lib/game/utils/sound/speak-texts';
import {PerfectPairs_GameConfig, PerfectPairs_SettingsTemplate} from './../../type';

// Types Game

export type ContentP = {
    gamePlayData:PerfectPairs_GamePlayData,
    gameData:PerfectPairs_GameData

    handleCheckingAnswer:HandleCheckingAnswerT
    handleSelectAnswer:HandleSelectOptionT
};

export type PerfectPairsT = InitialGameProps<PerfectPairs_GameConfig,
    PerfectPairs_SettingsTemplate,
    PerfectPairs_GameData,
    PerfectPairs_GamePlayData>;

export type PerfectPairsL1T = PerfectPairsT['game'];

export type PerfectPairs_GamePlayData = {
    correctAnswerQty:number
    mistakeQte:number,
    iteration:number,
    numberOptions:number,

    selectedVariant:{ answer:Variant | null, isCorrect:boolean | null },

    isActiveVerification:boolean,
    isAnimated:boolean,
    isFieldUpdate:boolean
};

export type PerfectPairs_GameData = {
    readonly answersQty:number;
    readonly level:number;
    readonly arrayOptions:Array<Array<Variant>>;
};

export type WordItem = {
    word:string;
    transcription:string;
    imageUrls:string[];
    soundUrl:string;
};

export type Variant = WordItem & {
    isCorrect:boolean
};

// Interface components

export interface AnswerListP {
    gameData:PerfectPairs_GameData;
    gamePlayData:PerfectPairs_GamePlayData;

    handlerSelectAnswer:HandleSelectOptionT;
}

export interface InterfaceQuestionFieldP {
    gamePlayData:PerfectPairs_GamePlayData;
    gameData:PerfectPairs_GameData;
}

export interface WordComponentP {
    level:Number;
    variant:Variant;
    animation?:boolean;
}

// Types function

export type HandleCheckingAnswerT = () => void;
export type HandleSelectOptionT = (variant:Variant) => void;

export type useCurrentStateGameP =
    Pick<PerfectPairsT, 'speakTexts' | 'changeGPDOnline' | 'initFinishPlaying'> &
    Pick<ContentP, 'gameData' | 'gamePlayData'>;

export type useCurrentStateGameT = (params:useCurrentStateGameP) => void;

type OnCheckingAnswerP =
    { gameData:PerfectPairs_GameData, gamePlayData:PerfectPairs_GamePlayData, speakTexts:(props:SpeakTexts) => void }
    & Pick<PerfectPairsT, 'changeGPDOnline'>;

export type OnCheckingAnswerT = (params:OnCheckingAnswerP) => void;

interface RandomGeneratorVariantsP {
    wordsArray:WordItem[];
    prevOptions?:Variant[];
}

export type RandomGeneratorVariantsT = (params:RandomGeneratorVariantsP) => Variant[];

type OnSelectOptionP = { variant:Variant }
    & Pick<PerfectPairsT, 'changeGPDOnline'>
    & Pick<PerfectPairs_GamePlayData, 'selectedVariant'>;

export type OnSelectOptionT = (params:OnSelectOptionP) => void;