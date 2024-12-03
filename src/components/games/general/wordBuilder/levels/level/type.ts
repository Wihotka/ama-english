import {InitialGameProps} from '@custom-types';
import {WordItem} from '@lib/game/utils/get-words/types';
import {
    WordBuilder_GameConfig,
    WordBuilder_SettingsTemplate,
} from '../../type';
import React from 'react';

export type ContentP = {
    gamePlayData:WordBuilder_GamePlayData,
    gameData:WordBuilder_GameData,

    handleHint:() => void,
    handlePuzzle:(e:React.MouseEvent<HTMLButtonElement>, index:number) => void,
    handleVoice:() => void,
};

export type InfoP = Omit<ContentP, 'handlePuzzle'>;

export type PuzzlesP = Pick<ContentP, 'gamePlayData' | 'handlePuzzle'>;

export type useCurrentStateP = Pick<WordBuilderT, 'game' | 'changeGPDOnline' | 'initFinishPlaying'>;

export type updateCurrentFieldForNextWordP
    = {result:boolean}
    & Pick<ContentP, 'gameData' | 'gamePlayData'>
    & Pick<WordBuilderT, 'changeGPDOnline' | 'initFinishPlaying'>;

export type handleHintCBP
    = Pick<ContentP, 'gameData' | 'gamePlayData'>
    & Pick<WordBuilderT, 'changeGPDOnline' | 'initFinishPlaying'>;

export type handlePuzzleCBP
    = {e:any, index:number}
    & Pick<ContentP, 'gameData' | 'gamePlayData'>
    & Pick<WordBuilderT, 'changeGPDOnline'>;

export type handleVoiceCBP
    = Pick<ContentP, 'gameData' | 'gamePlayData'>
    & Pick<WordBuilderT, 'speakTexts' | 'changeGPDOnline'>;

// readonly api types
export type WordBuilder_GameData = {
    readonly level:number,
    readonly words:Array<WordItem>,
    readonly answersQty:number,
    readonly isHintHidden:boolean,
    readonly alphabet:Array<string>
};

export type WordBuilder_GamePlayData = {
    currentWordIndex:number,
    pseudoCurrentWordArray:Array<string>,

    mistakeQty:number,
    successAnswerWithFirstTimeQty:number,
    successAnswerWithSecondTimeQty:number,

    normalPuzzlesArray:Array<string>,
    mixedPuzzlesArray:Array<string>,

    pressedPuzzleIndexes:Array<number>,
    successPuzzleIndexes:Array<number>,
    errorPuzzleIndexes:Array<number>,

    isFieldUpdate:boolean,
    isPuzzlePressed:boolean,
    isHintButtonPressed:boolean,
    isCandidateFieldActive:boolean,
    isVoiceButtonPressed:boolean
};

export type WordBuilderT = InitialGameProps<WordBuilder_GameConfig,
    WordBuilder_SettingsTemplate,
    WordBuilder_GameData,
    WordBuilder_GamePlayData>;

export type WordBuilderGameT = WordBuilderT['game'];