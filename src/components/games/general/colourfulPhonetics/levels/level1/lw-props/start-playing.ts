import {StartPlayingCB} from '@custom-types/game';
import {ColourfulPhoneticsGameT} from '../../../type';

export const startPlaying:StartPlayingCB<ColourfulPhoneticsGameT> = ({gameData}) => {
    const {correctColors} = gameData;
    const fillColors = correctColors.map((v) => ~v ? '#fff' : '');

    return {
        currentColor: null,
        fillColors,
        isSoundPlaying: false,
        pressedBtnIndex: -1,
        correctAnswersQty: 0,
        wrongAnswersQty: 0,
        failedColor: null,
    };
};
