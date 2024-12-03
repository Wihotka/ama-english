import {GenerateAGPD} from '@custom-types';
import {LetterChainGameT} from '../type';

export const generateGPD:GenerateAGPD<LetterChainGameT> = () => ({
    selectedWords: [],
    inputIndexes: [],
    letters: [],
    answerStatus: null,
    gameIsActive: false,
    secondsNowGame: 0,
});