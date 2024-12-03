import {StartPlayingCB} from '@custom-types';
import {WorndNLettersGameT} from '../type';

export const startPlaying:StartPlayingCB<WorndNLettersGameT> = ({gameData}) => {
    const {words} = gameData.examples[0];

    return {
        userAnswers: [],
        userScores: 0,
        correctAnswersQty: 0,
        iteration: 0,
        answerStatus: null,
        dragStatus: false,
        gameIsPausing: false,
        correctAnswers: [],
        mistakesPerIteration: 0,
        cards: [...words.map(word => ({...word, columnId: 1})),
            ...words.map(({id}) => ({id: words.length + id, word: null, columnId: 0, index: null}))]
    };
};
