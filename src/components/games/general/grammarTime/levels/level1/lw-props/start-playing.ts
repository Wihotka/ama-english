import {StartPlayingCB} from '@custom-types/game';
import {GrammarTimeGameL1T} from '../type';

export const startPlaying:StartPlayingCB<GrammarTimeGameL1T> = ({
    gameData,
}) => {
    const {qPerAnswer} = gameData;
    const userElements = new Array<null>(qPerAnswer).fill(null);

    return {
        currentQ: 0,
        highlight: false,
        isCorrect: false,
        correctAnswersQty: 0,
        mistakesQty: 0,
        userElements,
        elementToBeReplaced: null,
        isDragDisabled: false
    };
};
