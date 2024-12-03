import {StartPlayingCB} from '@custom-types';
import {FruitSmoothieL1T, FruitsSmoothie_GamePlayData} from '../type';

export const startPlaying:StartPlayingCB<FruitSmoothieL1T> = ():FruitsSmoothie_GamePlayData => ({
    iteration: 0,
    correctQty: {
        first: 0,
        second: 0
    },

    actualAttemptsQty: 0,

    fieldSize: {
        heightField: 0,
        widthField: 0
    },
    optionsFieldSize: [],

    question: '',
    options: [],

    selectOptions: null,

    timeToClick: 0,
    time: 0,
    maxTimeGame: 0,

    isFieldUpdate: true,
    isStartFly: false,
    isHidingOption: false,
    isCorrect: false,
});