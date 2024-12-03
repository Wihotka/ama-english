import {InitialGameProps, ThemePhraseJumping} from '@custom-types';
import {PhraseJumping_GameConfig, PhraseJumping_SettingTemplate} from './../../type';

//__________Game types__________
export type PhraseJumpingT = InitialGameProps<PhraseJumping_GameConfig,
    PhraseJumping_SettingTemplate,
    PhraseJumping_GameData,
    PhraseJumping_GamePlayData>;

export type PhraseJumpingGameT = PhraseJumpingT['game'];

export type PhraseJumping_GameData = {
    variants:Array<VariantT>
    hintContent:HintContent
};

export type PhraseJumping_GamePlayData = {
    question:string,
    correctAnswers:Array<string>,
    punctuationMark:string,

    hintType:'affirmative' | 'negative' | 'question' | 'comparative' | 'superlative' |
        'there' | 'fewLittle' | 'futureContinuous' | 'presentPerfectContinuous' | 'pastPerfect'

    inputText:string,
    correctAnswerQty:{ firstTry:number, secondTry:number },

    numberAttempts:number,
    iteration:number,

    isFieldUpdate:boolean,
    isCorrectAnswer:boolean | null,
    isHint:boolean;
    isOpenHint:boolean;
    isBtnDisabled:boolean;
};

export type VariantT = {
    question:string,
    correctAnswers:Array<string>,
    punctuationMark:string,
    typePrompt:'affirmative' | 'negative' | 'question' | 'comparative' | 'superlative' |
        'there' | 'fewLittle' | 'futureContinuous' | 'presentPerfectContinuous' | 'pastPerfect'
};

type HintContentItem = Array<Array<{text:string, type:TypeTextHint, isLocalized:boolean, title?:string}>>;

export type HintContent = {
    affirmative:HintContentItem,
    negative:HintContentItem,
    question:HintContentItem,
    comparative:HintContentItem,
    superlative:HintContentItem,
    there:HintContentItem,
    fewLittle:HintContentItem,
    futureContinuous:HintContentItem,
    presentPerfectContinuous:HintContentItem,
    pastPerfect:HintContentItem
};

//__________LwProps types__________

type FetchDataP = {
    theme:PhraseJumpingGameT['gameSettings']['theme']
    answersQty:PhraseJumpingGameT['gameSettings']['answersQty']
};

export type FetchDataT = (params:FetchDataP) => Promise<Array<VariantT>>;

//__________Components__________

export type ContentP =
    {
        handleCheckingAnswer:Function;
        handlerInputText:Function;
        handlerOnOpenHint:Function;
        theme:ThemePhraseJumping
    }
    & Pick<PhraseJumping_GameData, 'hintContent'>
    & Pick<PhraseJumping_GamePlayData, 'question' | 'hintType' | 'inputText' |
    'punctuationMark' | 'isHint' | 'isCorrectAnswer' | 'isOpenHint' | 'isFieldUpdate' | 'isBtnDisabled'>;

export type QuestionFieldP = Pick<ContentP, 'question' | 'isFieldUpdate' | 'theme'>;

export type InputFieldP = Pick<ContentP, 'inputText' | 'punctuationMark' | 'isCorrectAnswer' | 'handleCheckingAnswer' | 'handlerInputText' | 'isBtnDisabled'>;

export type HintFieldP = Pick<ContentP, 'hintContent' | 'hintType' | 'isOpenHint'>;

//__________Body function types__________

//__________Utils types__________

type OnInputTextP =
    { text:string }
    & Pick<PhraseJumpingT, 'changeGPDOnline'>;

export type OnInputTextT = (params:OnInputTextP) => void;

type OnCheckingAnswerP =
    Pick<PhraseJumpingT, 'changeGPDOnline'>
    & Pick<PhraseJumping_GamePlayData, 'inputText' | 'correctAnswers' | 'numberAttempts' | 'correctAnswerQty' | 'iteration'>;

export type OnCheckingAnswerT = (params:OnCheckingAnswerP) => void;

type OnOpenHintP = Pick<PhraseJumpingT, 'changeGPDOnline'>;

export type OnOpenHintT = (params:OnOpenHintP) => void;

type UseGameP = { answersQty:PhraseJumpingGameT['gameSettings']['answersQty'] }
    & Pick<PhraseJumpingT, 'changeGPDOnline' | 'initFinishPlaying'>
    & Pick<PhraseJumping_GameData, 'variants'>
    & Pick<PhraseJumping_GamePlayData, 'iteration' | 'isFieldUpdate'>;

export type UseGameT = (params:UseGameP) => void;

//__________Enums__________

export enum TypeTextHint {
    normal = 'normal',
    strong = 'strong'
}