import {ProgressPercentCB} from '@custom-types';
import {GrammarMixGameT2} from './../type';

export const calcProgressPercent:ProgressPercentCB<GrammarMixGameT2> = ({gameSettings, gamePlayData}) => {
    const {answersQty} = gameSettings;
    const {correctAnswerQty} = gamePlayData;

    return ((correctAnswerQty.firstTry + correctAnswerQty.secondTry / 2) * 100) / answersQty;
};