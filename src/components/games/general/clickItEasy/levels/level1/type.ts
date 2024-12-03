import {ClickItEasyLocalDataItem} from '@lib/game/utils/game-local-data-loader/types';
import {InitialGameProps} from '@custom-types';
import {ClickItEasy_GameConfig, ClickItEasy_SettingsTemplate} from '../../type';

// enums

export enum keyActions {
    add = 'add',
    delete = 'delete',
    compare = 'compare'
}

// components

export type ContentP = {
    isInputFieldFull:boolean,
    isMissedFieldFull:boolean,
    handleKey:handleKeyT
} & Pick<ClickItEasyGameT, 'gameData' | 'gamePlayData' | 'gameSettings'>;

export type InfoP =
    Pick<ClickItEasy_GameData, 'sentences'>
    & Pick<ClickItEasy_GamePlayData, 'currentSentenceIndex' | 'isFieldUpdated'>;
export type InputP =
    Pick<ContentP, 'handleKey'>
    & Pick<ClickItEasy_GameData, 'sentences'>
    & Pick<ClickItEasy_GamePlayData, 'typedSentence' | 'selectionType' | 'isFieldUpdated' | 'currentSentenceIndex'>;
export type KeyboardP =
    Pick<ContentP, 'handleKey'>
    & Pick<ClickItEasy_GameData, 'shuffledSentences'>
    & Pick<ClickItEasy_GamePlayData, 'currentSentenceIndex' | 'typedSentence' | 'isFieldUpdated'>;

// setters

export type setInputSelectionCBT = (type:string) => ReturnType<setInputSelectionT>;
export type setInputSelectionT = (
    props:{type:string, updateFieldCB:updateFieldCBT, updateTypedSentenceCB:updateTypedSentenceCBT}
        & Pick<ClickItEasyT1, 'changeGPDOnline'>
        & Pick<ClickItEasy_GamePlayData, 'mistakeQty' | 'typedSentence'>
        & Pick<ClickItEasy_GamePlayData, 'firstTryCorrectAnswerQty' | 'secondTryCorrectAnswerQty'>
) => void;

// updates

export type updateFieldCBT = () => ReturnType<updateFieldT>;
export type updateFieldT = (
    props:{answersQty:number}
        & Pick<ClickItEasyT1, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<ClickItEasy_GamePlayData, 'currentSentenceIndex'>
) => void;

export type updateTypedSentenceCBT = () => ReturnType<updateTypedSentenceT>;
export type updateTypedSentenceT = (
    props:Pick<ClickItEasy_GameData, 'normalSentences'>
        & Pick<ClickItEasy_GamePlayData, 'currentSentenceIndex' | 'typedSentence'>
        & Pick<ClickItEasyT1, 'changeGPDOnline'>
) => void;

// handlers

type handleKeyButtonP = {word:string, action:keyActions, index?:number};
export type handleKeyT = (word:string, action:keyActions, index?:number) => ReturnType<handleKeyButtonT>;
export type handleKeyButtonT = (
    props:{isInputFieldFull:boolean, setInputSelectionCB:setInputSelectionCBT, isMissedFieldFull:boolean}
        & handleKeyButtonP
        & Pick<ClickItEasyT1, 'changeGPDOnline'>
        & Pick<ClickItEasy_GameData, 'sentences'>
        & Pick<ClickItEasy_GamePlayData, 'typedSentence' | 'currentSentenceIndex' | 'mistakeQty' | 'missingWords'>
) => void;

// hooks

export type useMissedWordsT = (
    props:Pick<ClickItEasy_GamePlayData, 'typedSentence' | 'missingWords' | 'emptyPartIndexes'>
        & Pick<ClickItEasyT1, 'changeGPDOnline'>
) => void;

// readonly api types
export type ClickItEasy_GameData = {
    readonly normalSentences:Array<Array<string>>
    readonly sentences:Array<ClickItEasyLocalDataItem>,
    readonly shuffledSentences:Array<Array<string>>
};

export type ClickItEasy_GamePlayData = {
    currentSentenceIndex:number,

    mistakeQty:number,
    firstTryCorrectAnswerQty:number,
    secondTryCorrectAnswerQty:number,

    selectionType:string,

    typedSentence:Array<{id?:number, word:string}>,
    missingWords:Array<{id?:number, word:string}>,
    emptyPartIndexes:Array<number>,

    isFieldUpdated:boolean
};

export type ClickItEasyT1 = InitialGameProps<ClickItEasy_GameConfig,
    ClickItEasy_SettingsTemplate,
    ClickItEasy_GameData,
    ClickItEasy_GamePlayData>;

export type ClickItEasyGameT = ClickItEasyT1['game'];