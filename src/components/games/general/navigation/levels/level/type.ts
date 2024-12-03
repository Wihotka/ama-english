import {InitialGameProps} from '@custom-types';
import {Navigation_GameConfig, Navigation_SettingsTemplate} from '../../type';
import {NavigationLocalDataItem} from '@lib/game/utils/game-local-data-loader/types';

export enum answerStatuses {
    success = 'Success',
    error = 'Error',
    none = 'None'
}

// components
export type ContentP = {
        handleCandidateCB:HandleCandidateCBT,
        handleFieldCB:HandleFieldCBT
    }
    & Pick<Navigation_GameData, 'options' | 'locationBackground'>
    & Pick<Navigation_GamePlayData, 'isFieldBlocked' | 'availableOptions' | 'currentAvailableOptionIndex' | 'answerStatus' |
    'isRightCandidate' | 'pressedCandidateName' | 'openedItemNames' | 'isHintShowed' | 'hintedItemNames' | 'pressedItemName' | 'isUpdating'>;

export type TaskP = Pick<ContentP, 'handleCandidateCB' | 'availableOptions' | 'currentAvailableOptionIndex' |
    'isRightCandidate' | 'pressedCandidateName' | 'isFieldBlocked' | 'answerStatus' | 'isHintShowed' | 'isUpdating'>;

export type FiledP = Pick<ContentP, 'options' | 'locationBackground' | 'hintedItemNames' | 'pressedItemName' |
    'isFieldBlocked' | 'handleFieldCB' | 'openedItemNames' | 'isHintShowed' | 'answerStatus'>;

// handlers
export type HandleCandidateCBT = (name:string) =>
    ReturnType<HandleCandidateT>;
export type HandleCandidateT = (
    props:{name:string}
    & Pick<NavigationT, 'changeGPDOnline'>
    & Pick<Navigation_GamePlayData, 'currentAvailableOptionIndex' | 'availableOptions' | 'taskMistakeQty' | 'openedItemNames'>
) => void;

export type HandleFieldCBT = (name:string) => ReturnType<HandleFieldT>;
export type HandleFieldT = (
    props:{name:string, fieldUpdatingCB:FieldUpdatingCBT}
        & Pick<NavigationT, 'changeGPDOnline'>
        & Pick<Navigation_GamePlayData, 'pressedCandidateName' | 'openedItemNames' | 'hintedItemNames' | 'mistakeQty' | 'taskMistakeQty'>
) => void;

export type FieldUpdatingCBT = (status:answerStatuses) => ReturnType<FieldUpdatingT>;
export type FieldUpdatingT = (
    props:{status:answerStatuses}
        & Pick<NavigationT, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<Navigation_GameData, 'options'>
        & Pick<Navigation_GamePlayData, 'currentOptionIndex' | 'availableOptions' | 'mistakeQty' |
        'currentAvailableOptionIndex' | 'answerQty' | 'openedItemNames' | 'taskMistakeQty'>
) => void;

// elements
export type Option = Pick<NavigationLocalDataItem, 'item' | 'sentence'>;

// readonly api types
export type Navigation_GameData = {
    readonly options:Array<Option>,
    readonly locationBackground:string
};

export type Navigation_GamePlayData = {
    answerQty:number,
    mistakeQty:number,
    taskMistakeQty:number,
    currentOptionIndex:number,
    currentAvailableOptionIndex:number,

    pressedItemName:string,
    pressedCandidateName:string,
    answerStatus:answerStatuses,

    isHintShowed:boolean,
    isFieldBlocked:boolean,
    isRightCandidate:boolean,
    isUpdating:boolean,

    openedItemNames:Array<string>,
    hintedItemNames:Array<string>,
    availableOptions:Array<Option>
};

export type NavigationT = InitialGameProps<Navigation_GameConfig,
    Navigation_SettingsTemplate,
    Navigation_GameData,
    Navigation_GamePlayData>;

export type NavigationGameT = NavigationT['game'];