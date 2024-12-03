import {StartPlayingCB} from '@custom-types/game';
import {SortOutGameT} from '../../../type';

export const startPlaying:StartPlayingCB<SortOutGameT> = ({}) => ({
    currentTask: 0,
    isCorrect: false,
    correctAnswersQty: 0,
    highlightIndex: -1,
    highlight: false,
    selectedElement: {
        image: -1,
        index: -1
    },
    isDragDisabled: false,
});
