import {ProgressPercentCB} from '@custom-types';
import {PhraseJumpingGameT} from './../type';

export const calcProgressPercent:ProgressPercentCB<PhraseJumpingGameT> = ({gameSettings, gamePlayData}) => {
    const {answersQty} = gameSettings;
    const {correctAnswerQty} = gamePlayData;

    return ((correctAnswerQty.firstTry + correctAnswerQty.secondTry / 2) * 100) / answersQty;
};