import {StartPlayingCB} from '@custom-types/game';
import {TextTeaserGameT} from '../../../type';

export const startPlaying:StartPlayingCB<TextTeaserGameT> = ({gameData}) => {
    const {textParts} = gameData;

    return {
        mistakesQty: 0,
        rightAnswersQty: 0,
        textParts: [...textParts],
        isCheckBtnDisabled: true,
        isHintUsed: false,
        highlight: false,
        isDragDisabled: false,
        isCorrect: false,
    };
};
