import {InitialGameProps} from '@custom-types';
import {Checkpoint_GameConfig, Checkpoint_SettingsTemplate} from '../../type';
import {ChangeEvent} from 'react';

// components

export type ContentP = {
    handleCardCB:handleCardCBT,
    handlePlayCB:handlePlayCBT,
    handleInputCB:handleInputCBT,
    compareValuesCB:compareValuesCBT,
    course:number
} & Pick<CheckpointGameT, 'gameData' | 'gamePlayData'>;

export type CardsP = {
    course:number
} & Pick<ContentP, 'handleCardCB'>
    & Pick<Checkpoint_GameData, 'options'>
    & Pick<Checkpoint_GamePlayData, 'hiddenCardIndexes' | 'isModalShowed' | 'errorCardIndexes' | 'mistakeCardIndex'>;

export type ModalP = {compareValuesCB:compareValuesCBT}
    & Pick<ContentP, 'handlePlayCB' | 'handleInputCB'>
    & Pick<Checkpoint_GameData, 'options'>
    & Pick<Checkpoint_GamePlayData, 'currentOptionIndex' | 'isModalShowed' | 'isPlayButtonPressed' | 'inputValue' | 'answerStatus'>;

export type TaskP = {card:DataItem}
    & Pick<Checkpoint_GamePlayData, 'currentOptionIndex'>;

export type CaseP = {card:DataItem}
    & Pick<ContentP, 'handlePlayCB'>
    & Pick<Checkpoint_GamePlayData, 'isPlayButtonPressed' | 'currentOptionIndex' | 'answerStatus'>;

export type InputP = {compareValuesCB:compareValuesCBT}
    & Pick<ContentP, 'handleInputCB'>
    & Pick<Checkpoint_GamePlayData, 'inputValue' | 'currentOptionIndex' | 'answerStatus'>;

// common

export type handleCardCBT = (index:number, id:number) => ReturnType<handleCardT>;
export type handleCardT = (
    props:{index:number, id:number}
        & Pick<CheckpointT, 'changeGPDOnline'>
        & Pick<Checkpoint_GamePlayData, 'currentOptionIndex' | 'answerQty'>
) => void;

export type handlePlayCBT = () => ReturnType<handlePlayT>;
export type handlePlayT = (
    props:Pick<Checkpoint_GameData, 'options'>
    & Pick<Checkpoint_GamePlayData, 'currentOptionIndex'>
    & Pick<CheckpointT, 'speakTexts' | 'changeGPDOnline'>
) => void;

export type handleInputCBT = (e:ChangeEvent<HTMLInputElement>) => ReturnType<handleInputT>;
export type handleInputT = (
    props:{e:ChangeEvent<HTMLInputElement>}
    & Pick<CheckpointT, 'changeGPDOnline'>
    & Pick<Checkpoint_GameData, 'keyboard'>
) => void;

export type compareValuesCBT = () => ReturnType<compareValuesT>;
export type compareValuesT = (
    props:{updateFieldCB:updateFieldCBT}
        & Pick<Checkpoint_GameData, 'options'>
        & Pick<Checkpoint_GamePlayData, | 'mistakeQty' | 'inputValue' | 'hiddenCardIndexes' | 'errorCardIndexes'
        | 'currentOptionIndex' | 'correctWithFirstTryQty' | 'correctWithSecondTryQty'>
        & Pick<CheckpointT, 'changeGPDOnline'>
) => void;

export type updateFieldCBT = () => ReturnType<updateFieldT>;
export type updateFieldT = (
    props:Pick<CheckpointT, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<Checkpoint_GameData, 'options'>
        & Pick<Checkpoint_GamePlayData, 'answerQty'>
) => void;

export type DataItem = {
    id:number,
    case:string,
    answer:string,
    theme?:string,
    sound?:string,
    img?:string,
    word?:string,
    transcription?:string,
    sentence?:Array<string>,
    words?:Array<string>
};

// readonly api types
export type Checkpoint_GameData = {
    readonly options:Array<DataItem>,
    readonly keyboard:Array<string>
};

export type Checkpoint_GamePlayData = {
    answerQty:number,
    mistakeQty:number,
    mistakeCardIndex:number,
    currentOptionIndex:number,
    correctWithFirstTryQty:number,
    correctWithSecondTryQty:number,

    inputValue:string,
    answerStatus:'success' | 'error' | '',

    hiddenCardIndexes:Array<number>,
    errorCardIndexes:Array<number>,

    isModalShowed:boolean,
    isPlayButtonPressed:boolean
};

export type CheckpointT = InitialGameProps<Checkpoint_GameConfig,
    Checkpoint_SettingsTemplate,
    Checkpoint_GameData,
    Checkpoint_GamePlayData>;

export type CheckpointGameT = CheckpointT['game'];