import {PayloadAction as PA} from '@reduxjs/toolkit';
import {StoreInner} from '@store';

// export const setStudyStage = (state:StoreInner['gamesCounterForFeedback'], action:PA<number>) => {
//     state.studyStage = action.payload;
// };

export const incrementGamesCounterForFeedback = (state:StoreInner['gamesCounterForFeedback']) => {
    ++state.counterForGames;
};

export const resetGamesCounterForFeedback = (state:StoreInner['gamesCounterForFeedback']) => {
    state.counterForGames = 0;
};

export const excludeGameForFeedback = (state:StoreInner['gamesCounterForFeedback'], action:PA<string>) => {
    const gameName = action.payload;

    state.gamesWithoutFeedback = [...state.gamesWithoutFeedback, gameName];
};

export const incrementPlatformCounterForFeedback = (state:StoreInner['gamesCounterForFeedback']) => {
    ++state.counterForPlatform;
};

export const resetPlatformCounterForFeedback = (state:StoreInner['gamesCounterForFeedback']) => {
    state.counterForPlatform = 0;
};

export const excludePlatformForFeedback = (state:StoreInner['gamesCounterForFeedback']) => {
    state.platformWithoutFeedback = true;
};