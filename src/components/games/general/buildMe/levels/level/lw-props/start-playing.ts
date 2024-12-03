import {generateMixedPuzzleArray} from '../utils';
import {generateNormalPuzzleArray} from '../utils';

import {StartPlayingCB} from '@custom-types';
import {BuildMeGameT} from '../type';

export const startPlaying:StartPlayingCB<BuildMeGameT> = ({gameData, gameConfig}) => {
    const {levelConfigs} = gameConfig;
    const {words, level, alphabet} = gameData;
    const arrayLongerBy = levelConfigs?.[level].mixedPuzzleArrayLongerByFL;

    const mixedPuzzlesArray = generateMixedPuzzleArray(words[0].word, arrayLongerBy, alphabet);
    const normalPuzzlesArray = generateNormalPuzzleArray(words[0].word);

    return {
        currentWordIndex: 0,
        pseudoCurrentWordArray: [],

        mistakeQty: 0,
        successAnswerWithFirstTimeQty: 0,
        successAnswerWithSecondTimeQty: 0,

        normalPuzzlesArray,
        mixedPuzzlesArray,

        pressedPuzzleIndexes: [],
        successPuzzleIndexes: [],
        errorPuzzleIndexes: [],

        isFieldUpdate: false,
        isPuzzlePressed: false,
        isHintButtonPressed: false,
        isCandidateFieldActive: false,
        isVoiceButtonPressed: false
    };
};