import {InitialGameProps} from '@custom-types';
import {EchoChamberLocalDataItem} from '@lib/game/utils/game-local-data-loader/types';
import {EchoChamber_GameConfig, EchoChamber_SettingsTemplate} from '../../type';

// components

export type ContentP = {
    isTheLastSentence:boolean,
    handlePlayCB:handlePlayCBT,
    handleDetailsCB:handleDetailsCBT,
    handleSwitchCB:handleSwitchCBT,
    isFieldUpdated:boolean
}
& Pick<EchoChamber_GameData, 'sentences'>
& Pick<EchoChamber_GamePlayData, 'currentSentenceIndex' | 'isDetailsShowed' | 'isSoundPlaying' | 'mode' | 'isMandatoryTime'>;

export type InteractiveP =
    Omit<ContentP, 'handleSwitchCB' | 'isMandatoryTime' | 'isTheLastSentence'>;

export type ButtonsP =
    Pick<ContentP, 'handlePlayCB' | 'currentSentenceIndex' | 'mode'>;

export type DetailsP =
    Pick<ContentP, 'sentences' | 'currentSentenceIndex' | 'isDetailsShowed' | 'handleDetailsCB'>;

export type WaveP =
    Pick<ContentP, 'isSoundPlaying' | 'mode'>;

// common

export type handlePlayCBT = (mode:'normal' | 'slowly') => ReturnType<handlePlayT>;
export type handlePlayT = (
    props:{playbackRate:number, mode:'normal' | 'slowly'}
    & Pick<EchoChamberT, 'speakTexts' | 'changeGPDOnline'>
    & Pick<EchoChamber_GameData, 'sentences'>
    & Pick<EchoChamber_GamePlayData, 'currentSentenceIndex'>
) => void;

export type handleDetailsCBT = () => ReturnType<handleDetailsT>;
export type handleDetailsT = (
    props:Pick<EchoChamberT, 'changeGPDOnline'>
    & Pick<EchoChamber_GamePlayData, 'isDetailsShowed'>
) => void;

export type handleSwitchCBT = () => ReturnType<handleSwitchT>;
export type handleSwitchT = (
    props:{setIsFieldUpdated:React.Dispatch<React.SetStateAction<boolean>>}
    & Pick<EchoChamberT, 'changeGPDOnline' | 'initFinishPlaying'>
    & Pick<EchoChamber_GamePlayData, 'currentSentenceIndex'>
    & Pick<ContentP, 'isTheLastSentence'>
) => void;

export type useTimerT = (
        props:& Pick<EchoChamber_GamePlayData, 'timer'>
        & Pick<EchoChamberT, 'changeGPDOnline'>
) => void;

// enums

export enum soundMode {
    'empty' = 'empty',
    'normal' = 'normal',
    'slowly' = 'slowly'
}

// readonly api types
export type EchoChamber_GameData = {
    readonly sentences:Array<EchoChamberLocalDataItem>
};

export type EchoChamber_GamePlayData = {
    timer:number,
    currentSentenceIndex:number,

    mode:soundMode,

    isSoundPlaying:boolean,
    isDetailsShowed:boolean,
    isMandatoryTime:boolean
};

export type EchoChamberT = InitialGameProps<EchoChamber_GameConfig,
    EchoChamber_SettingsTemplate,
    EchoChamber_GameData,
    EchoChamber_GamePlayData>;

export type EchoChamberGameT = EchoChamberT['game'];