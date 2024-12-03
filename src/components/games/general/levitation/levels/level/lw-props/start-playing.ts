import {StartPlayingCB} from '@custom-types';
import {LevitationGameT} from '../type';

export const startPlaying:StartPlayingCB<LevitationGameT> = ({gameSettings}) => {
    const {feathersQty} = gameSettings;
    const coordinatesAndDirections = [];

    for (let i = 0; i < feathersQty; i++) coordinatesAndDirections.push([0, 0, '', '', 0]);

    return {
        currentWordIndex: 0,
        mistakeQty: 0,

        correctAnswerWithFirstTry: 0,
        correctAnswerWithSecondTry: 0,

        coordinatesAndDirections,
        availableCoordinates: [],

        successPressedIndexes: [],
        errorPressedIndexes: [],

        isPlayButtonPressed: false,
        isFeatherPressed: false,
        isFieldUpdating: true,

        sizes: {
            fieldWidth: 0,
            fieldHeight: 0,
            featherWidth: 0,
            featherHeight: 0,
        },
    };
};