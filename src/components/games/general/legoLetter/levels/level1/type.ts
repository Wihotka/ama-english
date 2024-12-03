import {
    LegoLetter_GameConfig,
    LegoLetter_SettingsTemplate,
} from '../../type';
import {InitialGameProps} from '@custom-types';

export type ContentP = {
    gamePlayData:LegoLetterL1_GamePlayData;
    gameData:LegoLetterL1_GameData;
    handleClick:Function;
};

export type LegoLetterL1T = InitialGameProps<LegoLetter_GameConfig,
    LegoLetter_SettingsTemplate,
    LegoLetterL1_GameData,
    LegoLetterL1_GamePlayData>;

export type LegoLetterGameL1T = LegoLetterL1T['game'];

export type LegoLetterL1_GamePlayData = {
    iteration:number,
    selectedIndexes:Array<number>,
    correctAnswersQty:number,
    currentAnswer:{ index:number, isCorrect:boolean } | null,
    mistakesPerAnswerQty:number
};

export type LegoLetterL1_GameData = {
    data:Array<{
        height:number,
        letterPaths:Array<string>,
        parts:Array<{ part:string, index:number | null }>,
        letter:string
    }>
};
