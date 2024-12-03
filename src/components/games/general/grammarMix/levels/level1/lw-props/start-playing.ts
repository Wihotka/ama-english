import {StartPlayingCB} from '@custom-types';
import {GrammarMixGameT} from '../type';

export const startPlaying:StartPlayingCB<GrammarMixGameT> = ({gameData}) => {
    const {variants} = gameData;

    const {question, correctAnswer, variantsAnswer} = variants[0];

    return {
        question,
        options: variantsAnswer.map(answer => ({content: answer})),
        correctAnswer,

        iteration: 0,

        selectOption: {
            option: null,
            isCorrect: null
        },
        correctAnswerQty: 0,

        isFieldUpdate: false,
    };
};