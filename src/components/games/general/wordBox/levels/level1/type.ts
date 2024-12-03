import {
    WordBox_GameConfig,
    WordBox_SettingsTemplate, WordBox_ImagesPaths,
} from '../../type';
import {InitialGameProps} from '@custom-types';

export type ContentP = {
    gamePlayData:WordBox_GamePlayData;
    gameData:WordBox_GameData;
    complexity:number;
    wordsQty:number;
    level:number;
    theme:string;
    imagesPaths:WordBox_ImagesPaths | undefined;
    handleClick:Function;
    checkAnswer:Function;
    handleHint:Function;
};

export type WordBoxT = InitialGameProps<WordBox_GameConfig,
    WordBox_SettingsTemplate,
    WordBox_GameData,
    WordBox_GamePlayData>;

export type WordBoxGameT = WordBoxT['game'];

export type Position = {
    col:number, row:number
};

export type WordBox_GamePlayData = {
    foundWords:Array<string>,
    additionalWords:Array<string>,
    userAnswers:Array<FilledCellT>,
    currentDirection:directionT | null,
    selectedCells:Array<Position>,
    wrongAnswersQty:number,
    answerStatus:'correct' | 'wrong' | null,
    hintIsActive:boolean
};

export type WordBox_GameData = {
    fields:Array<FilledCellT>,
    size:number,
    placedWords:Array<{ word:string, start?:FilledCellT}>,
    words:Array<string>,
    allWords:Array<string>,
    directions:Array<directionT>
};

export type FilledCellT = Position & { letter:string };
export type CellT = Position & { letter:string | null };
export type directionT = 'vertical' | 'horizontal' | 'reverseVertical'
    | 'reverseHorizontal' | 'diagonalToRight' | 'diagonalToLeft';
