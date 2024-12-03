import {
    Alphabet_GameConfig,
    Alphabet_SettingsTemplate,
} from '../../type';
import {InitialGameProps} from '@custom-types';

export type ContentP = {
    gamePlayData:AlphabetL1_GamePlayData;
    gameData:AlphabetL1_GameData;
    handleClick:Function;
};

export type useTimerP =
    Pick<AlphabetL1_GamePlayData, 'userTime'>
    & Pick<AlphabetL1T, 'initFinishPlaying' | 'changeGPDOnline'>
    & {mode:string};

export type AlphabetL1T = InitialGameProps<Alphabet_GameConfig,
    Alphabet_SettingsTemplate,
    AlphabetL1_GameData,
    AlphabetL1_GamePlayData>;

export type AlphabetGameL1T = AlphabetL1T['game'];

export type AlphabetL1_GamePlayData = {
    currentIndex:number,
    mistakeIndex:number | null,
    userTime:number
};

export type LetterT = {
    letter:string,
    index:number,
    imgIndex:number
};

export type AlphabetL1_GameData = {
    data:Array<LetterT>,
    alphabet:Array<string>
};
