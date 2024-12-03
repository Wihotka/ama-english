import {RefObject} from 'react';
import {InitialGameProps} from '@custom-types';
import {FruitsSmoothie_GameConfig, FruitsSmoothie_SettingsTemplate} from './../../type';

//__________Game types__________
export type FruitSmoothieT = InitialGameProps<FruitsSmoothie_GameConfig,
    FruitsSmoothie_SettingsTemplate,
    FruitsSmoothie_GameData,
    FruitsSmoothie_GamePlayData>;

export type FruitSmoothieL1T = FruitSmoothieT['game'];

export type FruitsSmoothie_GameData = {
    variantArray:Array<VariantT>
    timeFly:number;
    maxAttemptsQty:number
};

export type FruitsSmoothie_GamePlayData = {
    iteration:number
    correctQty:{
        first:number,
        second:number
    }

    actualAttemptsQty:number
    selectOptions:VariantObj | null;

    question:string,
    options:Array<VariantObj>

    fieldSize:{
        heightField:number,
        widthField:number,
    }

    time:number,
    timeToClick:number;
    maxTimeGame:number;

    optionsFieldSize:Array<{ heightField:number, widthField:number }>

    isFieldUpdate:boolean,
    isStartFly:boolean,
    isHidingOption:boolean,
    isCorrect:boolean,
};

export interface VariantT {
    question:string,
    options:Array<VariantObj>,
}

export interface VariantObj {
    id:number,
    text:string,
    image:string,
    cutImage:string,

    startPositionFly:CoordinatesI,
    coordinatesCentralPoint:CoordinatesI,
    endPositionFly:CoordinatesI,
    currentStep:number,

    flyDelay:number,

    startSide:SideFlight

    isCorrect:boolean;
    isSelect:boolean;
    isDisabled:boolean;
}

export interface FetchDataItem {
    question:string,
    correct:string,
    incorrectAnswers:string[]
}

export interface CoordinatesI {
    X:number,
    Y:number
}

//__________Components__________
export type ContentP =
    {
        fieldRef:RefObject<HTMLDivElement>
        optionsRef:RefObject<HTMLDivElement>[]

        handlerSelectOption:HandlerSelectOption
        generateTransformStyles:OnTransformStyles
    }
    & Pick<FruitsSmoothie_GamePlayData, 'options' | 'question' | 'selectOptions' | 'isFieldUpdate'>;

export type QuestionFieldP = Pick<ContentP, 'selectOptions' | 'question' | 'isFieldUpdate'>;

export type OptionFieldP = Pick<ContentP, 'fieldRef' | 'optionsRef' | 'handlerSelectOption' | 'generateTransformStyles' | 'options' | 'isFieldUpdate'>;

export type OptionP = { optionsRef:RefObject<HTMLDivElement>, variant:VariantObj }
    & Pick<ContentP, 'handlerSelectOption' | 'generateTransformStyles' | 'isFieldUpdate'>;

//__________Body function types__________

export type HandlerSelectOption = (option:VariantObj) => void;

export type OnTransformStyles = (option:VariantObj) => Object;

//__________LwProps types__________

interface FetchDataP {
    theme:FruitSmoothieL1T['gameSettings']['theme'];
    level:number,
    answersQty:number,
    complexity:number;
}

export type FetchDataT = (params:FetchDataP) => Promise<Array<FetchDataItem>>;

export type GenerateVariantsP = {
    theme:FruitSmoothieL1T['gameSettings']['theme']
    level:number,
    answersQty:number,
    complexity:number
} & Pick<FruitsSmoothie_GameConfig, 'flyDelay' | 'finalHeightPosition' | 'rangeCoordinatesCentralPoint'>;

export type GenerateVariantsT = (params:GenerateVariantsP) => Promise<Array<VariantT>>;

//__________Utils types__________

type UseGameP = {
    field:RefObject<HTMLDivElement>;
    optionsRef:Array<RefObject<HTMLDivElement>>
    gamePlayData:FruitsSmoothie_GamePlayData;
    gameData:FruitsSmoothie_GameData;
    gameSettings:FruitSmoothieL1T['gameSettings'];
} & Pick<FruitSmoothieT, 'changeGPDOnline' | 'initFinishPlaying'>;

export type UseGameT = (params:UseGameP) => void;

type SetFieldSizeP = {
    field:RefObject<HTMLDivElement>;
} & Pick<FruitSmoothieT, 'changeGPDOnline'>;

export type SetFieldSizeT = (params:SetFieldSizeP) => void;

type updateStartCoordinatesP = { option:VariantObj }
    & Pick<FruitsSmoothie_GamePlayData, 'fieldSize' | 'optionsFieldSize'>;

export type updateStartCoordinatesT = (params:updateStartCoordinatesP) =>
    {
        startPositionFly:CoordinatesI,
        coordinatesCentralPoint:CoordinatesI,
        endPositionFly:CoordinatesI
    };

type SetOptionFieldP = {
    optionsRef:Array<RefObject<HTMLDivElement>>;
} & Pick<FruitSmoothieT, 'changeGPDOnline'>;

export type SetOptionFieldT = (params:SetOptionFieldP) => void;

type OnTrajectoryBezierP = {
    startPositionFly:CoordinatesI,
    coordinatesCentralPoint:CoordinatesI,
    endPositionFly:CoordinatesI,
    time:number
};

export type OnTrajectoryBezierT = (params:OnTrajectoryBezierP) => { posX:number, posY:number };

type OnSelectOptionP = { selectOption:VariantObj }
    & Pick<FruitSmoothieT, 'changeGPDOnline'>
    & Pick<FruitsSmoothie_GamePlayData, 'options' | 'time' | 'actualAttemptsQty'>
    & Pick<FruitsSmoothie_GameData, 'maxAttemptsQty'>;

export type OnSelectOptionT = (params:OnSelectOptionP) => void;

type OnAllDisabledOptionP =
    Pick<FruitsSmoothie_GamePlayData, 'options' | 'actualAttemptsQty' | 'selectOptions'>
    & Pick<FruitSmoothieT, 'changeGPDOnline'>
    & Pick<FruitsSmoothie_GameData, 'maxAttemptsQty'>;

export type OnAllDisabledOptionT = (params:OnAllDisabledOptionP) => void;

type OnHidingOptionP = Pick<FruitSmoothieT, 'changeGPDOnline'>;

export type OnHidingOptionT = (params:OnHidingOptionP) => void;

type OnActualTimeP =
    Pick<FruitsSmoothie_GamePlayData, 'time' | 'actualAttemptsQty' | 'timeToClick'>
    & Pick<VariantObj, 'isSelect' | 'flyDelay'>;

export type OnActualTimeT = (params:OnActualTimeP) => number;

type GetTransformStylesP = {
        variant:VariantObj
    }
    & Pick<FruitsSmoothie_GameData, 'timeFly'>
    & Pick<FruitsSmoothie_GamePlayData, 'fieldSize' | 'optionsFieldSize' | 'isHidingOption' | 'time' | 'actualAttemptsQty' | 'timeToClick'>;

export type GetTransformStylesT = (params:GetTransformStylesP) => Object;

//__________Enums__________

export enum TypeTextInQuestion {
    answer = '_____',
    endOfQuestion = '*'
}

export enum SideFlight {
    left = 'left',
    right = 'right'
}