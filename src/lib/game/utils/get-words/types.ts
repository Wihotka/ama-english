import {WordsThemes} from '@custom-types';

export type GetWordsP = {
    wordsQty:number;
    studyStage?:Array<number>;
    theme?:WordsThemes | '';
    disabledThemes?:Array<WordsThemes>;
    hasImg?:boolean;
    isDividedWord?:boolean;
    isNeedDisabledSounds?:boolean;
    transcriptionDifficulty?:'simple' | 'hard' | 'random';
    description?:1|2;
    isNotEqualWroteWords?:boolean;
};

export type WordItem = {
    word:string;
    studyStage:number;
    translation:string;
    theme:WordsThemes;
    soundUrl:string;
    transcription:string;
    dividedTranscription?:Array<string>;
    dividedWord?:Array<string>;
    imageUrls?:Array<string>;
    description?:{
        [key:number]:string;
    };
};

type WordItemT<T extends GetWordsP> = WordItem
    & (T['isDividedWord'] extends boolean ? { dividedWord:Array<string>; dividedTranscription:Array<string> } : {})
    & (T['description'] extends number ? { description:{
        [key:number]:string;
    } } : {})
    & (T['hasImg'] extends boolean ? { imageUrls:string; } : {});

export type GetWordsBackEnd<T extends GetWordsP> = (p:T) => Array<WordItemT<T>>;

export type GetWordsT = <T extends GetWordsP>(p:T) => Promise<{ words:ReturnType<GetWordsBackEnd<T>> }>;
