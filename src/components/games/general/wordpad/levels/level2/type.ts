import {InitialGameProps, StaticEngData} from '@custom-types';
import {WordItem} from '@lib/game/utils/get-words/types';
import {Wordpad_GameConfig, Wordpad_SettingsTemplate} from '../../type';

// custom enums

export enum selections {
    success = 'success',
    error = 'error',
    none = 'none'
}

// components

export type ContentP = {
    handlePlay:handlePlayT,
    handleKey:handleKeyT
} & Pick<WordpadGameT, 'gameData' | 'gamePlayData' | 'gameSettings'>;

export type InteractiveP = Pick<Wordpad_GamePlayData, 'isPlayButtonPressed' | 'currentWordIndex'>
    & Pick<ContentP, 'handlePlay'>;
export type TimerP =
    Pick<Wordpad_GamePlayData, 'timer'>
    & Pick<Wordpad_GameData, 'startTimer'>;
export type InputP =
    Pick<Wordpad_GameData, 'words'>
    & Pick<Wordpad_GamePlayData, 'currentWordIndex' | 'typedWord' | 'selectionType' | 'isFieldUpdated'>;
export type KeyboardP =
    Pick<Wordpad_GameData, 'keyboard'>
    & Pick<Wordpad_GamePlayData, 'pressedKey' | 'removedKeys' | 'isTimerBegan'>
    & Pick<ContentP, 'handleKey'>;

// setters

export type setPressedKeyCBT = (code:string) => ReturnType<setPressedKeyT>;
export type setPressedKeyT = (
    props:{code:string}
        & Pick<WordpadT2, 'changeGPDOnline'>
        & Pick<Wordpad_GamePlayData, 'isKeyPressed' | 'removedKeys' | 'isTimerBegan'>
) => void;

export type setInputSelectionCBT = (type:selections) => ReturnType<setInputSelectionT>;
export type setInputSelectionT = (
    props:{type:selections, updateFieldCB:updateFieldCBT}
        & Pick<WordpadT2, 'changeGPDOnline'>
        & Pick<Wordpad_GamePlayData, 'answerQty'>
) => void;

// commons

export type updateFieldCBT = () => ReturnType<updateFieldT>;
export type updateFieldT = (
    props:{answersQty:number}
        & Pick<WordpadT2, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<Wordpad_GamePlayData, 'currentWordIndex'>
        & Pick<Wordpad_GameData, 'startTimer'>
) => void;

export type deleteExtraKeysCBT = () => ReturnType<deleteExtraKeysT>;
export type deleteExtraKeysT = (
    props:Pick<Wordpad_GamePlayData, 'removedKeys' | 'timeForRemoveKey' | 'currentWordIndex' | 'currentLetterIndex'>
        & Pick<Wordpad_GameData, 'keyboard' | 'words'>
        & Pick<WordpadT2, 'changeGPDOnline'>
) => void;

// handlers

export type handlePlayT = () => ReturnType<handlePlayButtonT>;
export type handlePlayButtonT = (
    props:Pick<Wordpad_GameData, 'words'>
        & Pick<Wordpad_GamePlayData, 'currentWordIndex'>
        & Pick<WordpadT2, 'changeGPDOnline' | 'speakTexts'>
) => void;

export type handleKeyT = (letter:string) => ReturnType<handleKeyButtonT>;
export type handleKeyButtonT = (
    props:{letter:string, setPressedKeyCB:setPressedKeyCBT}
) => void;

// hooks

export type useKeyboardT = (
    props:{setPressedKeyCB:setPressedKeyCBT}
        & Pick<Wordpad_GamePlayData, 'typedWord' | 'isTimerBegan'>
) => void;

export type useInputT = (
    props:{setInputSelectionCB:setInputSelectionCBT}
        & Pick<Wordpad_GameData, 'words'>
        & Pick<Wordpad_GamePlayData, 'currentWordIndex' | 'currentLetterIndex'
        | 'selectionType' | 'pressedKey' | 'typedWord' | 'isKeyPressed' | 'timer'>
        & Pick<WordpadT2, 'changeGPDOnline'>
) => void;

export type useTimerT = (
    props:{updateFieldCB:updateFieldCBT, deleteExtraKeysCB:deleteExtraKeysCBT, defaultTimer:number}
        & Pick<WordpadT2, 'changeGPDOnline'>
        & Pick<Wordpad_GamePlayData, 'timer' | 'timeForRemoveKey' | 'isTimerBegan'>
) => void;

// readonly api types
export type Wordpad_GameData = {readonly words:Array<WordItem>, readonly startTimer:number} & Pick<StaticEngData, 'keyboard'>;

export type Wordpad_GamePlayData = {
    currentWordIndex:number,
    currentLetterIndex:number,

    timer:number,
    timeForRemoveKey:number,
    answerQty:number,

    selectionType:selections,
    pressedKey:string,

    typedWord:Array<string>,
    removedKeys:Array<string>,

    isKeyPressed:boolean,
    isTimerBegan:boolean,
    isFieldUpdated:boolean,
    isPlayButtonPressed:boolean
};

export type WordpadT2 = InitialGameProps<Wordpad_GameConfig,
    Wordpad_SettingsTemplate,
    Wordpad_GameData,
    Wordpad_GamePlayData>;

export type WordpadGameT = WordpadT2['game'];