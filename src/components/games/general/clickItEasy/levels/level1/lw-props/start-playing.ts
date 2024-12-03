import {StartPlayingCB} from '@custom-types';
import {ClickItEasyGameT} from '../type';

export const startPlaying:StartPlayingCB<ClickItEasyGameT> = ({}) => ({
    currentSentenceIndex: 0,

    mistakeQty: 0,
    firstTryCorrectAnswerQty: 0,
    secondTryCorrectAnswerQty: 0,

    selectionType: '',

    typedSentence: [],
    missingWords: [],
    emptyPartIndexes: [],

    isFieldUpdated: false,
});