import {InitialGameProps, StaticEngData} from '@custom-types';
import {WordItem} from '@lib/game/utils/get-words/types';
import {Wordpad_GameConfig, Wordpad_SettingsTemplate} from '../../type';

// components

export type ContentP = {
    handlePlay:handlePlayT,
    handleHint:handleHintT,
    handleKey:handleKeyT,

    isInputFieldFull:boolean,
    isMissedFieldFull:boolean
} & Pick<WordpadGameT, 'gameData' | 'gamePlayData' | 'gameSettings'>;

export type InteractiveP =
    {hint:WordpadGameT['gameSettings']['hint']}
    & Pick<Wordpad_GamePlayData, 'isPlayButtonPressed' | 'isHintButtonPressed' | 'currentWordIndex'>
    & Pick<ContentP, 'handlePlay' | 'handleHint'>;
export type InputP =
    Pick<Wordpad_GameData, 'words'>
    & Pick<Wordpad_GamePlayData, 'currentWordIndex' | 'typedWord' | 'selectionType' | 'isFieldUpdated'>;
export type KeyboardP =
    Pick<Wordpad_GameData, 'keyboard'>
    & Pick<Wordpad_GamePlayData, 'pressedKey'>
    & Pick<ContentP, 'handleKey'>;

// setters

export type setInputValueCBT = (code:string) => ReturnType<setInputValueT>;
export type setInputValueT = (
    props:{code:string, isInputFieldFull:boolean, setInputSelectionCB:setInputSelectionCBT, isMissedFieldFull:boolean}
        & Pick<WordpadT1, 'changeGPDOnline'>
        & Pick<Wordpad_GameData, 'words'>
        & Pick<Wordpad_GamePlayData, 'typedWord' | 'currentWordIndex' | 'mistakeQty' | 'missingLetters'>
) => void;

export type setInputSelectionCBT = (type:string) => ReturnType<setInputSelectionT>;
export type setInputSelectionT = (
    props:{type:string, updateFieldCB:updateFieldCBT, updateTypedWordCB:updateTypedWordCBT}
        & Pick<WordpadT1, 'changeGPDOnline'>
        & Pick<Wordpad_GamePlayData, 'mistakeQty' | 'typedWord'>
        & Pick<Wordpad_GamePlayData, 'firstTryCorrectAnswerQty' | 'secondTryCorrectAnswerQty'>
) => void;

// updates

export type updateFieldCBT = () => ReturnType<updateFieldT>;
export type updateFieldT = (
    props:{answersQty:number}
        & Pick<WordpadT1, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<Wordpad_GamePlayData, 'currentWordIndex'>
) => void;

export type updateTypedWordCBT = () => ReturnType<updateTypedWordT>;
export type updateTypedWordT = (
    props:Pick<Wordpad_GameData, 'words'>
        & Pick<Wordpad_GamePlayData, 'currentWordIndex' | 'typedWord'>
        & Pick<WordpadT1, 'changeGPDOnline'>
) => void;

// handlers

export type handlePlayT = () => ReturnType<handlePlayButtonT>;
export type handlePlayButtonT = (
    props:Pick<Wordpad_GameData, 'words'>
        & Pick<Wordpad_GamePlayData, 'currentWordIndex'>
        & Pick<WordpadT1, 'changeGPDOnline' | 'speakTexts'>
) => void;

export type handleHintT = () => ReturnType<handleHintButtonT>;
export type handleHintButtonT = handlePlayButtonT;

export type handleKeyT = (letter:string) => ReturnType<handleKeyButtonT>;
export type handleKeyButtonT = (
    props:{letter:string, setInputValueCB:setInputValueCBT}
) => void;

// hooks

export type useKeyboardEventsT = (
    props:{setInputValueCB:setInputValueCBT, isInputFieldFull:boolean}
        & Pick<Wordpad_GamePlayData, 'typedWord'>
        & Pick<WordpadT1, 'changeGPDOnline'>
) => void;

export type useMissedLetterT = (
    props:Pick<Wordpad_GamePlayData, 'typedWord' | 'missingLetters' | 'emptyPartIndexes'>
        & Pick<WordpadT1, 'changeGPDOnline'>
) => void;

// readonly api types
export type Wordpad_GameData = {readonly words:Array<WordItem>} & Pick<StaticEngData, 'keyboard'>;

export type Wordpad_GamePlayData = {
    currentWordIndex:number,

    mistakeQty:number,
    firstTryCorrectAnswerQty:number,
    secondTryCorrectAnswerQty:number,

    selectionType:string,
    pressedKey:string,

    typedWord:Array<string>,
    missingLetters:Array<string>,
    emptyPartIndexes:Array<number>,

    isHintButtonPressed:boolean,
    isPlayButtonPressed:boolean,
    isFieldUpdated:boolean
};

export type WordpadT1 = InitialGameProps<Wordpad_GameConfig,
    Wordpad_SettingsTemplate,
    Wordpad_GameData,
    Wordpad_GamePlayData>;

export type WordpadGameT = WordpadT1['game'];