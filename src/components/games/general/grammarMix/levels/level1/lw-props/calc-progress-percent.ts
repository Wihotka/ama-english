import {ProgressPercentCB} from '@custom-types';
import {GrammarMixGameT} from './../type';

export const calcProgressPercent:ProgressPercentCB<GrammarMixGameT> = ({gameSettings, gamePlayData}) => {
    const {answersQty} = gameSettings;
    const {correctAnswerQty} = gamePlayData;

    return (correctAnswerQty * 100) / answersQty;
};