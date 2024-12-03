export type ChangeMapVisibilityT = (newValue:boolean) => void;

export type ChangeActiveInputT = (newIndex:number | 'next' | 'prev') => void;

export type ChangeUserAnswersT = (newValue:string, index:number) => void;

export type HandleCorrectAnswerT = (soundUrl:string) => void;

export type HandleIncorrectAnswerT = (iterationChange:boolean, word:string) => void;
