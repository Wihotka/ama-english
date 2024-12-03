import {
    WorndNLetters_GameConfig,
    WorndNLetters_SettingsTemplate
} from '../../type';
import {InitialGameProps} from '@custom-types';

export type ContentP = {
    gamePlayData:WorndNLetters_GamePlayData;
    gameData:WorndNLetters_GameData;
    level:number;
    moveHandler:Function;
    checkAnswer:Function;
    changeDragStatus:Function;
};

export type WorndNLettersT = InitialGameProps<WorndNLetters_GameConfig,
    WorndNLetters_SettingsTemplate,
    WorndNLetters_GameData,
    WorndNLetters_GamePlayData>;

export type WorndNLettersGameT = WorndNLettersT['game'];

export type WorndNLetters_GamePlayData = {
    userAnswers:Array<{ id:number, isCorrect:boolean }>,
    userScores:number,
    iteration:number,
    correctAnswersQty:number,
    answerStatus:'correct' | 'wrong' | null,
    dragStatus:boolean,
    gameIsPausing:boolean,
    correctAnswers:Array<number>,
    mistakesPerIteration:number,
    cards:Array<CardT>
};

export type CardT = {
    word:string | null,
    id:number,
    columnId:number,
    index:number | null,
    image?:string | undefined
};

export type WorndNLetters_GameData = {
    examples:Array<{
        words:Array<{
            word:string,
            id:number,
            index:number,
            image?:string | undefined
        }>
    }>
};
