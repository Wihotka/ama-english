import {
    LegoLetter_GameConfig,
    LegoLetter_SettingsTemplate,
} from '../../type';
import {InitialGameProps} from '@custom-types';

export type ContentP = {
    gamePlayData:LegoLetterL2_GamePlayData;
    clickHandler:Function;
    gameData:LegoLetterL2_GameData;
    checkAnswer:Function;
};

export type LegoLetterL2T = InitialGameProps<LegoLetter_GameConfig,
    LegoLetter_SettingsTemplate,
    LegoLetterL2_GameData,
    LegoLetterL2_GamePlayData>;

export type LegoLetterGameL2T = LegoLetterL2T['game'];

export type LegoLetterL2_GamePlayData = {
    iteration:number,
    answer:{ letter:string, isCorrect:boolean },
    gameIsActive:boolean,
    correctAnswersQty:number,
    mistakesPerAnswerQty:number,
    isAnswerChecked:boolean
};

export type LegoLetterL2_GameData = {
    data:Array<{
        cards:Array<{
            letter:string,
            height:number,
            width:number,
            path:string,
            imgName:string,
            isCorrect?:boolean
        }>,
        height:number,
        width:number,
        path:string,
        currentLetter:string,
        currentImgName:string,
    }>
};
