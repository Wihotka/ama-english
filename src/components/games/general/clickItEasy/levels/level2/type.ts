import {InitialGameProps} from '@custom-types';
import {ClickItEasy_GameConfig, ClickItEasy_SettingsTemplate} from '../../type';
import {ClickItEasyLocalDataItem} from '@lib/game/utils/game-local-data-loader/types';

// components

export type ContentP = { handleKey:handleKeyT } & Pick<ClickItEasyGameT, 'gameData' | 'gamePlayData' | 'gameSettings'>;

export type InfoP =
    Pick<ClickItEasy_GameData, 'sentences'>
    & Pick<ClickItEasy_GamePlayData, 'currentSentenceIndex' | 'isFieldUpdated'>;
export type TimerP =
    Pick<ClickItEasy_GamePlayData, 'timer'>
    & Pick<ClickItEasy_GameData, 'startTimer'>;
export type InputP =
    Pick<ClickItEasy_GameData, 'sentences'>
    & Pick<ClickItEasy_GamePlayData, 'typedSentence' | 'selectionType' | 'isFieldUpdated' | 'currentSentenceIndex'>;
export type KeyboardP =
    Pick<ContentP, 'handleKey'>
    & Pick<ClickItEasy_GameData, 'shuffledSentences'>
    & Pick<ClickItEasy_GamePlayData, 'currentSentenceIndex' | 'typedSentence' | 'isFieldUpdated' | 'pressedKeyIndex'>;

// setters

export type setInputSelectionCBT = (type:string) => ReturnType<setInputSelectionT>;
export type setInputSelectionT = (
    props:{type:string, updateFieldCB:updateFieldCBT}
        & Pick<ClickItEasyT2, 'changeGPDOnline'>
        & Pick<ClickItEasy_GamePlayData, 'typedSentence' | 'answerQty' | 'mistakeQty'>
) => void;

// updates

export type updateFieldCBT = () => ReturnType<updateFieldT>;
export type updateFieldT = (
    props:{answersQty:number}
        & Pick<ClickItEasyT2, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<ClickItEasy_GameData, 'startTimer'>
        & Pick<ClickItEasy_GamePlayData, 'currentSentenceIndex'>
) => void;

// handlers

type handleKeyButtonP = {word:string, index:number};
export type handleKeyT = (word:string, index:number) => ReturnType<handleKeyButtonT>;
export type handleKeyButtonT = (
    props:{setInputSelectionCB:setInputSelectionCBT}
        & handleKeyButtonP
        & Pick<ClickItEasyT2, 'changeGPDOnline'>
        & Pick<ClickItEasy_GameData, 'sentences' | 'normalSentences'>
        & Pick<ClickItEasy_GamePlayData, 'typedSentence' | 'currentSentenceIndex' | 'mistakeQty'>
) => void;

// hooks

export type useTimerT = (
    props:{updateFieldCB:updateFieldCBT}
        & Pick<ClickItEasyT2, 'changeGPDOnline'>
        & Pick<ClickItEasy_GamePlayData, 'timer'>
) => void;

// readonly api types
export type ClickItEasy_GameData = {
    readonly normalSentences:Array<Array<string>>
    readonly sentences:Array<ClickItEasyLocalDataItem>,
    readonly shuffledSentences:Array<Array<string>>,
    readonly startTimer:number
};

export type ClickItEasy_GamePlayData = {
    timer:number,
    answerQty:number,
    pressedKeyIndex:number,
    currentSentenceIndex:number,
    mistakeQty:number,

    selectionType:string,

    typedSentence:Array<{id?:number, word:string}>,

    isFieldUpdated:boolean
};

export type ClickItEasyT2 = InitialGameProps<ClickItEasy_GameConfig,
    ClickItEasy_SettingsTemplate,
    ClickItEasy_GameData,
    ClickItEasy_GamePlayData>;

export type ClickItEasyGameT = ClickItEasyT2['game'];