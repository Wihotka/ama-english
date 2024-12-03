import {
    Alphabet_GameConfig,
    Alphabet_SettingsTemplate,
} from '../../type';
import {InitialGameProps} from '@custom-types';

export type ContentP = {
    gamePlayData:AlphabetL2_GamePlayData;
    gameData:AlphabetL2_GameData;
    handleClick:Function;
    birdsQty:number;
};

export type AlphabetL2T = InitialGameProps<Alphabet_GameConfig,
    Alphabet_SettingsTemplate,
    AlphabetL2_GameData,
    AlphabetL2_GamePlayData>;

export type AlphabetGameL2T = AlphabetL2T['game'];

export type AlphabetL2_GamePlayData = {
    wrongAnswersQty:number,
    userAnswers:Array<number>,
    iteration:number,
    correctAnswersPerIteration:number,
    correctAnswersQty:number,
    isAnimated:boolean,
    currentMistakeId:number | null
};

export type AlphabetL2_GameData = {
    data:Array<LetterT>,
};

export type LetterT = {
    correctLetter:string,
    isCorrect:boolean,
    wrongLetter:string | null,
    birdNum:number
    id:number
};
