import {StartPlayingCB} from '@custom-types/game';
import {GrammarTimeGameL2T} from '../type';

export const startPlaying:StartPlayingCB<GrammarTimeGameL2T> = ({
    gameData,
}) => {
    const {qPerAnswer} = gameData;
    const userElements = new Array<null>(qPerAnswer).fill(null);

    return {
        currentQ: 0,
        highlight: false,
        isCorrect: false,
        firstTryCorrectAnswersQty: 0,
        secondTryCorrectAnswersQty: 0,
        mistakesQty: 0,
        userElements,
        elementToBeReplaced: null,
        correctIndexes: [],
        isDragDisabled: false
    };
};
