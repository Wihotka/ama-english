import {StartPlayingCB} from '@custom-types/game';
import {SecretCodeGameT} from '../../../type';

export const startPlaying:StartPlayingCB<SecretCodeGameT> = ({
    gameData,
    gameSettings,
}) => {
    const {words} = gameData;
    const {mode} = gameSettings;

    return {
        iterationCount: 0,
        isMapOpen: mode !== 'hard',
        userAnswers: new Array(words[0].word.length).fill(''),
        mistakesQty: 0,
        mistakeIndexes: [],
        highlight: false,
        correctAnswersQty: 0,
        activeInputIndex: 0,
    };
};
