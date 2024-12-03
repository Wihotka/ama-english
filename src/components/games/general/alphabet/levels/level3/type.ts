import {
    Alphabet_GameConfig,
    Alphabet_SettingsTemplate,
} from '../../type';
import {InitialGameProps} from '@custom-types';

export type ContentP = {
    gamePlayData:AlphabetL3_GamePlayData;
    gameData:AlphabetL3_GameData;
    handleClick:Function;
    studyStage:number | undefined;
};

export type AlphabetL3T = InitialGameProps<Alphabet_GameConfig,
    Alphabet_SettingsTemplate,
    AlphabetL3_GameData,
    AlphabetL3_GamePlayData>;

export type AlphabetGameL3T = AlphabetL3T['game'];

export type AlphabetL3_GamePlayData = {
    currentIndex:number,
    mistakeIndex:number | null,
    iteration:number,
    wrongAnswersQty:number,
    correctAnswersQty:number
};

export type AlphabetL3_GameData = {
    data:Array<Array<{
        letter:string,
        index:number
    }>>,
};
