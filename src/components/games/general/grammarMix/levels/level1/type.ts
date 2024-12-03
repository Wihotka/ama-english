import {InitialGameProps} from '@custom-types';
import {GrammarMix_GameConfig, GrammarMix_SettingsTemplate} from '@components/games/general/grammarMix/type';

//__________Game types__________
export type GrammarMixT1 = InitialGameProps<GrammarMix_GameConfig,
    GrammarMix_SettingsTemplate,
    GrammarMix_GameData,
    GrammarMix_GamePlayData>;

export type GrammarMixGameT = GrammarMixT1['game'];

export type GrammarMix_GameData = {
    variants:Array<VariantT>
};

export type GrammarMix_GamePlayData = {
    question:string,
    options:Array<OptionT>,
    correctAnswer:string

    iteration:number;

    selectOption:{ option:OptionT | null, isCorrect:boolean | null },
    correctAnswerQty:number,

    isFieldUpdate:boolean,
};

export type VariantT = {
    question:string,
    correctAnswer:string
    variantsAnswer:Array<string>
};

export type OptionT = {
    content:string,
};

//__________LwProps types__________

type FetchDataP = {
    theme:GrammarMixGameT['gameSettings']['theme']
    answersQty:GrammarMixGameT['gameSettings']['answersQty']
};

export type FetchDataT = (params:FetchDataP) => Promise<Array<VariantT>>;

//__________Components__________

export type ContentP = {
    handlerSelectOption:HandlerSelectOption
    handleCheckingAnswer:Function
} &
    Pick<GrammarMix_GamePlayData, 'question' | 'options' | 'isFieldUpdate' | 'selectOption'>;

export type OptionsFieldP = Pick<ContentP, 'options' | 'isFieldUpdate' | 'selectOption' | 'handlerSelectOption'>;

export type QuestionFieldP = Pick<ContentP, 'question' | 'isFieldUpdate' | 'selectOption'>;

//__________Body function types__________

export type HandlerSelectOption = (option:OptionT) => void;

//__________Utils types__________

type OnSelectOptionP = { option:OptionT } &
    Pick<GrammarMixT1, 'changeGPDOnline'>;

export type OnSelectOptionT = (params:OnSelectOptionP) => void;

type OnCheckingAnswerP = Pick<GrammarMixT1, 'changeGPDOnline'>
    & Pick<GrammarMix_GamePlayData, 'selectOption' | 'correctAnswer' | 'correctAnswerQty'>;

export type OnCheckingAnswerT = (params:OnCheckingAnswerP) => void;

type UseGameP =
    { answersQty:GrammarMixGameT['gameSettings']['answersQty'] }
    & GrammarMix_GamePlayData
    & GrammarMix_GameData
    & Pick<GrammarMixT1, 'changeGPDOnline' | 'initFinishPlaying'>;

export type UseGameT = (params:UseGameP) => void;

//__________Enums__________

export enum TypeLetter {
    question = '_____',
    endOfQuestion = '*',
    answer = '#'
}
