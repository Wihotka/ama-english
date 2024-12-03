import {StartPlayingCB} from '@custom-types';
import {GrammarMixGameT2} from '../type';

export const startPlaying:StartPlayingCB<GrammarMixGameT2> = ({gameData}) => {
    const {variants} = gameData;

    const {question, correctAnswer, indexVariantsAnswer} = variants[0];

    return {
        question,
        indexVariantsAnswer,
        correctAnswer,

        inputText: '',

        iteration: 0,
        numberAttempts: 0,
        correctAnswerQty: {firstTry: 0, secondTry: 0},

        isFieldUpdate: false,
        isCorrectAnswer: null
    };
};