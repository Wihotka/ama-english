import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {ReduxGame} from '@custom-types';

const initialState:ReduxGame = {
    status: {
        isRunGame: false,
        isPlaying: false,
        isFinishPlaying: false,
        isDisabledStartBtn: false
    },
    gameData: {},
    gamePlayData: {},
    gameConfig: {},
    gameSettings: {},
    gameTime: {
        start: 0,
        end: 0
    }
};

export const {actions, reducer} = createSlice({
    name: 'game',
    initialState,
    reducers,
});