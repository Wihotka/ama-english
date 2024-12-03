import {Storyteller_Answer} from '../../type';

export type ChooseAnswerT = (questionIndex:number, answer:Storyteller_Answer) => void;

export type HandleNextT = () => void;

export type HandlePrevT = () => void;
