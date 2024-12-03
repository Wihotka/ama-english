import {InitialGameProps, StaticEngData} from '@custom-types';
import {WordItem} from '@lib/game/utils/get-words/types';
import {BreakTheSpell_GameConfig, BreakTheSpell_SettingsTemplate} from '../../type';

// components

export type ContentP = {
    handlePlay:handlePlayT,
    handleKey:handleKeyT,

    isInputFieldFull:boolean,
    isMissedFieldFull:boolean
} & Pick<BreakTheSpellGameT, 'gameData' | 'gamePlayData' | 'gameSettings'>;

export type InteractiveP =
    {level:BreakTheSpellGameT['gameSettings']['level']}
    & Pick<ContentP, 'handlePlay'>
    & Pick<BreakTheSpell_GameData, 'words'>
    & Pick<BreakTheSpell_GamePlayData, 'isPlayButtonPressed' | 'currentWordIndex' | 'isFieldUpdated'>;
export type InputP =
    Pick<BreakTheSpell_GameData, 'words'>
    & Pick<BreakTheSpell_GamePlayData, 'currentWordIndex' | 'typedWord' | 'selectionType' | 'isFieldUpdated'>;
export type KeyboardP =
    Pick<BreakTheSpell_GameData, 'keyboard'>
    & Pick<BreakTheSpell_GamePlayData, 'pressedKey'>
    & Pick<ContentP, 'handleKey'>;

// setters

export type setInputValueCBT = (code:string) => ReturnType<setInputValueT>;
export type setInputValueT = (
    props:{code:string, isInputFieldFull:boolean, setInputSelectionCB:setInputSelectionCBT, isMissedFieldFull:boolean}
        & Pick<BreakTheSpell, 'changeGPDOnline'>
        & Pick<BreakTheSpell_GameData, 'words'>
        & Pick<BreakTheSpell_GamePlayData, 'typedWord' | 'currentWordIndex' | 'mistakeQty' | 'missingLetters'>
) => void;

export type setInputSelectionCBT = (type:string) => ReturnType<setInputSelectionT>;
export type setInputSelectionT = (
    props:{type:string, updateFieldCB:updateFieldCBT, updateTypedWordCB:updateTypedWordCBT}
        & Pick<BreakTheSpell, 'changeGPDOnline'>
        & Pick<BreakTheSpell_GamePlayData, 'mistakeQty' | 'typedWord'>
        & Pick<BreakTheSpell_GamePlayData, 'firstTryCorrectAnswerQty' | 'secondTryCorrectAnswerQty'>
) => void;

// updates

export type updateFieldCBT = () => ReturnType<updateFieldT>;
export type updateFieldT = (
    props:{answersQty:number}
        & Pick<BreakTheSpell, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<BreakTheSpell_GamePlayData, 'currentWordIndex'>
) => void;

export type updateTypedWordCBT = () => ReturnType<updateTypedWordT>;
export type updateTypedWordT = (
    props:Pick<BreakTheSpell_GameData, 'words'>
        & Pick<BreakTheSpell_GamePlayData, 'currentWordIndex' | 'typedWord'>
        & Pick<BreakTheSpell, 'changeGPDOnline'>
) => void;

// handlers

export type handlePlayT = () => ReturnType<handlePlayButtonT>;
export type handlePlayButtonT = (
    props:Pick<BreakTheSpell_GameData, 'words'>
        & Pick<BreakTheSpell_GamePlayData, 'currentWordIndex'>
        & Pick<BreakTheSpell, 'changeGPDOnline' | 'speakTexts'>
) => void;

export type handleKeyT = (letter:string) => ReturnType<handleKeyButtonT>;
export type handleKeyButtonT = (
    props:{letter:string, setInputValueCB:setInputValueCBT}
) => void;

// hooks

export type useKeyboardEventsT = (
    props:{setInputValueCB:setInputValueCBT, isInputFieldFull:boolean}
        & Pick<BreakTheSpell_GamePlayData, 'typedWord'>
        & Pick<BreakTheSpell, 'changeGPDOnline'>
) => void;

export type useMissedLetterT = (
    props:Pick<BreakTheSpell_GamePlayData, 'typedWord' | 'missingLetters' | 'emptyPartIndexes'>
        & Pick<BreakTheSpell, 'changeGPDOnline'>
) => void;

// readonly api types
export type BreakTheSpell_GameData = {readonly words:Array<WordItem>} & Pick<StaticEngData, 'keyboard'>;

export type BreakTheSpell_GamePlayData = {
    currentWordIndex:number,

    mistakeQty:number,
    firstTryCorrectAnswerQty:number,
    secondTryCorrectAnswerQty:number,

    selectionType:string,
    pressedKey:string,

    typedWord:Array<string>,
    missingLetters:Array<string>,
    emptyPartIndexes:Array<number>,

    isPlayButtonPressed:boolean,
    isFieldUpdated:boolean
};

export type BreakTheSpell = InitialGameProps<BreakTheSpell_GameConfig,
    BreakTheSpell_SettingsTemplate,
    BreakTheSpell_GameData,
    BreakTheSpell_GamePlayData>;

export type BreakTheSpellGameT = BreakTheSpell['game'];