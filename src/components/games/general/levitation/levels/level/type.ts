import {InitialGameProps} from '@custom-types';
import {WordItem} from '@lib/game/utils/get-words/types';
import {
    Levitation_GameConfig,
    Levitation_SettingsTemplate,
} from '../../type';
import {RefObject} from 'react';

export type ContentP = {
    handleFeatherCB:Function,
    handlePlayCB:Function,

    field:RefObject<HTMLDivElement>,
    feather:RefObject<HTMLButtonElement>,
    level:number
} & Pick<LevitationGameT, 'gamePlayData' | 'gameData'>;

export type updateFieldP = {
    index:number,
    speed:number,
    words:Array<WordItem>[],
    isCorrectFeather:boolean,
    isHasMistake:boolean,
} & Pick<LevitationGameT, 'gamePlayData'> & Pick<LevitationT, 'changeGPDOnline' | 'initFinishPlaying'>;

export type moveP = {
    coordinatesAndDirections:Array<Array<string | number>>,
    availableCoordinates:Array<Array<number>>,
} & Pick<updateFieldP, 'speed'> & Pick<LevitationT, 'changeGPDOnline'>;

export type useStartParamsP =
    {fps:number, startMove:() => void }
    & Pick<ContentP, 'feather' | 'field'>
    & Pick<updateFieldP, 'speed'>
    & Pick<LevitationT, 'changeGPDOnline'>
    & Pick<LevitationGameT, 'gamePlayData'>;

export type handleFeatherP
    = Pick<updateFieldP, 'index'>
    & Pick<LevitationGameT, 'gameSettings' | 'gamePlayData' | 'gameData'>
    & Pick<LevitationT, 'changeGPDOnline' | 'initFinishPlaying'>;

export type getSecondTryP
    = Pick<updateFieldP, 'index'>
    & Pick<LevitationGameT, 'gamePlayData'>
    & Pick<LevitationT, 'changeGPDOnline'>;

export type setRandomCoordsP
    = Pick<updateFieldP, 'speed'>
    & Pick<LevitationGameT, 'gamePlayData'>
    & Pick<LevitationT, 'changeGPDOnline'>;

export type handlePlayP
    = Pick<LevitationGameT, 'gameData' | 'gamePlayData'>
    & Pick<LevitationT, 'speakTexts' | 'changeGPDOnline'>
    & Pick<ContentP, 'level'>;

export type InteractiveP
    = Pick<LevitationGameT, 'gameData' | 'gamePlayData'>
    & Pick<ContentP, 'handlePlayCB' | 'level'>;

export type FeathersP = Omit<ContentP, 'handlePlayCB'>;

export type setSizeP = Pick<ContentP, 'field' | 'feather'> & Pick<LevitationT, 'changeGPDOnline'>;

// readonly api types
export type Levitation_GameData = {
    readonly words:Array<Array<WordItem>>,
    readonly sounds:Array<Array<string>>,
    readonly rightIndexes:Array<number>,
    readonly colorOrder:Array<Array<number>>
};

export type Levitation_GamePlayData = {
    currentWordIndex:number,
    mistakeQty:number,

    correctAnswerWithFirstTry:number,
    correctAnswerWithSecondTry:number,

    sizes:{
        fieldWidth:number,
        fieldHeight:number,
        featherWidth:number,
        featherHeight:number,
    },

    coordinatesAndDirections:Array<Array<string | number>>,
    availableCoordinates:Array<Array<number>>,

    successPressedIndexes:Array<number>,
    errorPressedIndexes:Array<number>,

    isPlayButtonPressed:boolean,
    isFeatherPressed:boolean,
    isFieldUpdating:boolean
};

export type LevitationT = InitialGameProps<Levitation_GameConfig,
    Levitation_SettingsTemplate,
    Levitation_GameData,
    Levitation_GamePlayData>;

export type LevitationGameT = LevitationT['game'];