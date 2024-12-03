import {PayloadAction as PA} from '@reduxjs/toolkit';
import {assign, merge} from 'lodash';
import {ReduxGame} from '@custom-types';
import {globalGameConfig} from '@global-config/game';

type G = ReduxGame;

export const addGameData = (state:G, action:PA<G['gameData']>) => {
    state.gameData = action.payload;
};

export const changeGamePlayData = (state:G, action:PA<G['gamePlayData']>) => {

    for (const property in action.payload) {
        (state.gamePlayData as any)[property] = (action.payload as any)[property];
    }
};

export const startPlaying = (state:G, action:PA<G['gamePlayData']>) => {
    const startTime = Date.now();

    state.gamePlayData = action.payload;
    state.gameTime.start = startTime + globalGameConfig.startAnimationDuration;

    state.status = {
        ...state.status,
        isPlaying: true,
        isFinishPlaying: false,
    };
};

export const runGame = (state:G) => {
    const game = {
        gamePlayData: {},
        status: {
            isRunGame: true
        }
    };

    merge(state, game);
};

export const runPlayingGame = (state:G) => {
    const game = {
        gamePlayData: {},
        status: {
            isPlaying: true
        }
    };

    merge(state, game);
};

export const finishPlaying = (state:G) => {
    state.gameTime.end = Date.now();

    state.status = {
        ...state.status,
        isPlaying: false,
        isFinishPlaying: true,
        isDisabledStartBtn: true
    };
};

export const setIsDisabledStartBtn = (state:G, action:PA<G['status']['isDisabledStartBtn']>) => {
    state.status = {
        ...state.status,
        isDisabledStartBtn: action.payload
    };
};

export const deleteAllGameData = (state:G) => {
    assign(state, {
        gameData: null,
        gamePlayData: null,
        finishGameData: {
            success: null,
            data: {}
        },
        gameTime: {
            start: null,
            end: null
        },
        status: {
            isRunGame: false,
            isFinishPlaying: false,
            isStartPlaying: false,
            isShowModalContent: false,
            isSawingResults: false,
            isPausePlaying: false,
        },
        gameSettings: null,
        gameConfig: null
    });
};

export const deleteGameData = (state:G) => {
    assign(state, {
        gameData: null,
        gamePlayData: null,
        finishGameData: {
            success: null,
            data: {}
        },
        gameTime: {
            start: null,
            end: null
        },
        status: {
            isRunGame: false,
            isFinishPlaying: false,
            isStartPlaying: false,
            isShowModalContent: false,
            isSawingResults: false,
            isPausePlaying: false,
        }
    });
};

type P = Pick<G, 'gameConfig' | 'gameSettings'>;

export const changeGameSettingsAndConfig = (state:G, action:PA<P>) => {
    merge(state, action.payload);
};

export const changeGameSettings = (state:G, action:PA<G['gameSettings']>) => {
    const {payload} = action;

    //блок для роботи з налаштуванням значення якого масив;

    for (const key in payload) {
        // @ts-ignore
        if (Array.isArray(payload[key])) {
            // @ts-ignore
            state.gameSettings[key] = payload[key];
        }
        // state.settings[key] = settings[key];
    }

    merge(state.gameSettings = state.gameSettings ?? {}, action.payload);
    //
    // state.settings = action.payload;
    // merge(state.settings, action.payload);
};