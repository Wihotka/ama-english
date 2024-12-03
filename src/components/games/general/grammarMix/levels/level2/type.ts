import {InitialGameProps} from '@custom-types';
import {GrammarMix_GameConfig, GrammarMix_SettingsTemplate} from '@components/games/general/grammarMix/type';

//__________Game types__________
export type GrammarMixT2 = InitialGameProps<GrammarMix_GameConfig,
    GrammarMix_SettingsTemplate,
    GrammarMix_GameData,
    GrammarMix_GamePlayData>;

export type GrammarMixGameT2 = GrammarMixT2['game'];

export type GrammarMix_GameData = {
    variants:Array<VariantT>
};

export type GrammarMix_GamePlayData = {
    question:Array<string>,
    correctAnswer:string,

    iteration:number,
    numberAttempts:number,

    inputText:string,
    indexVariantsAnswer:number

    correctAnswerQty:{ firstTry:number, secondTry:number },

    isFieldUpdate:boolean,
    isCorrectAnswer:boolean | null,
};

export type VariantT = {
    question:Array<string>,
    correctAnswer:string,
    indexVariantsAnswer:number,
};

//__________LwProps types__________

type FetchDataP = {
    theme:GrammarMixGameT2['gameSettings']['theme']
    answersQty:GrammarMixGameT2['gameSettings']['answersQty']
};

export type FetchDataT = (params:FetchDataP) => Promise<Array<VariantT>>;

//__________Components__________

export type ContentP =
    {
        handlerInputText:HandlerInputText
        handleCheckingAnswer:Function
    }
    & Pick<GrammarMix_GamePlayData, 'question' | 'inputText' | 'correctAnswer' | 'indexVariantsAnswer' | 'isFieldUpdate' | 'isCorrectAnswer'>;

export type InputFieldP = Pick<ContentP, 'inputText' | 'handlerInputText' | 'handleCheckingAnswer' | 'isCorrectAnswer'> & {
    isDisableCheck:boolean
};

export type QuestionFieldP = Pick<ContentP, 'question' | 'correctAnswer' | 'indexVariantsAnswer' | 'isFieldUpdate' | 'isCorrectAnswer'>;

//__________Body function types__________

export type HandlerInputText = (text:string) => void;

//__________Utils types__________

type OnInputTextP = { text:string } & Pick<GrammarMixT2, 'changeGPDOnline'>;

export type OnInputTextT = (params:OnInputTextP) => void;

type OnCheckingAnswerP = Pick<GrammarMixT2, 'changeGPDOnline'>
    & Pick<GrammarMix_GamePlayData, 'inputText' | 'correctAnswer' | 'correctAnswerQty' | 'numberAttempts' | 'iteration'>;

export type OnCheckingAnswerT = (params:OnCheckingAnswerP) => void;

type UseGameP =
    { answersQty:GrammarMixGameT2['gameSettings']['answersQty'] }
    & GrammarMix_GamePlayData
    & GrammarMix_GameData
    & Pick<GrammarMixT2, 'changeGPDOnline' | 'initFinishPlaying'>;

export type UseGameT = (params:UseGameP) => void;

//__________Enums__________

export enum TypeLetter {
    question = '_____',
    endOfQuestion = '*',
    answer = '#'
}
