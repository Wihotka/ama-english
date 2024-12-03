import {InitialGameProps} from '@custom-types';
import {AirWord_GameConfig, AirWord_SettingsTemplate,} from '../../type';
import {GetWordsP} from '@lib/game/utils/get-words/types';

// components

export type ContentP = {handlePlaneCB:handlePlaneCBT} & Pick<AirWordGameT, 'gameData' | 'gamePlayData' | 'gameSettings'>;
export type TaskP = {level:AirWordGameT['gameSettings']['level'], theme:AirWordGameT['gameSettings']['theme']}
    & Pick<AirWord_GameData, 'wordsForTask' | 'correctWords'>
    & Pick<AirWord_GamePlayData, 'currentWordsIndex' | 'correctWordStatus' | 'isFieldUpdate'>;
export type PolygonP =
    {speedInSeconds:AirWordGameT['gameSettings']['speedInSeconds']}
    & Pick<ContentP, 'handlePlaneCB'>
    & Pick<AirWord_GameData, 'wordsForPlanes'>
    & Pick<AirWord_GamePlayData, 'currentWordsIndex' | 'isFieldUpdate' | 'correctWordStatus' | 'candidateWord' | 'isAnimate' | 'mistakeQty'>;

// utils

export type fieldUpdateCBT = (isCorrectAnswer:boolean) => ReturnType<fieldUpdateT>;
export type fieldUpdateT = (
    props:{
            isCorrectAnswer:boolean,
            answersQty:AirWordGameT['gameSettings']['answersQty'],
            speedInSeconds:AirWordGameT['gameSettings']['speedInSeconds']
        }
        & Pick<AirWordT, 'changeGPDOnline' | 'initFinishPlaying'>
        & Pick<AirWord_GamePlayData, 'currentWordsIndex' | 'userAnswerQty' | 'mistakeQty' | 'successWithFirstTry' | 'successWithSecondTry'>
) => void;

export type handlePlaneCBT = (word:string) => ReturnType<handlePlaneT>;
export type handlePlaneT = (
    props:{ word:string, fieldUpdateCB:fieldUpdateCBT}
        & Pick<AirWord_GamePlayData, 'timer'>
        & Pick<AirWord_GameData, 'correctWords'>
        & Pick<AirWord_GamePlayData, 'currentWordsIndex' | 'mistakeQty'>
        & Pick<AirWordT, 'changeGPDOnline'>
) => void;

export type useTimerT = (
    props:{fieldUpdateCB:fieldUpdateCBT}
        & Pick<AirWord_GamePlayData, 'timer'>
        & Pick<AirWordT, 'changeGPDOnline'>
) => void;

export type GetConditionForCorrectWordsT = Pick<AirWordGameT['gameSettings'], 'theme'| 'answersQty'> & {
    isFirstLevel:boolean;
    studyStage:GetWordsP['studyStage'];
};

export type GetConditionForWrongWordsT = GetConditionForCorrectWordsT & Pick<AirWordGameT['gameSettings'], 'planesQty'>;

// readonly api types

export type AirWord_GameData = {
    readonly wordsForTask:Array<string[]>,
    readonly wordsForPlanes:Array<string[]>,
    readonly correctWords:Array<string>
};

export type AirWord_GamePlayData = {
    timer:number,
    mistakeQty:number,
    userAnswerQty:number,
    currentWordsIndex:number,
    successWithFirstTry:number,
    successWithSecondTry:number

    candidateWord:string,
    correctWordStatus:string,

    isFieldUpdate:boolean,
    isAnimate:boolean
};

export type AirWordT = InitialGameProps<AirWord_GameConfig,
    AirWord_SettingsTemplate,
    AirWord_GameData,
    AirWord_GamePlayData>;

export type AirWordGameT = AirWordT['game'];