// readonly всегда
export type LetterChainGD = {
    letters:string[];
    alphabet:string[];
    words:string[];
};

export type LetterChainGPD = {
    stepBy:string;
    inputIndexes:number[];
    selectedWords:{word:string; player:number;}[];
    letters:string[];
    answerStatus:'correct'|'wrong'|null;
    gameIsActive:boolean;
    score:any;
};