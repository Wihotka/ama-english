import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {StoreInner} from '@store';

// Проверяем игры в cookie
const getCookieGames = (cookieName:string) => {
    const name = cookieName + '=';
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArr = cookieDecoded.split(';');

    const res:string[] = [];

    cookieArr.forEach(value => {
        if (value.includes(name)) {
            value.trim().substring(name.length).split(',').forEach(gameName => {
                res.push(gameName);
            });
        }
    });

    return res;
};

// Проверяем фидбэк на платформе в cookie
const getCookiePlatform = (cookieName:string) => {
    const name = cookieName + '=';
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArr = cookieDecoded.split(';');

    let res = false;

    cookieArr.forEach(value => {
        if (value.includes(name)) {
            res = !!value.trim().substring(name.length).split(',').length;
        }
    });

    return res;
};

// Проверяем localStorage
const platformEntriesInLocalStorage = localStorage.getItem('platformEntries') ?? '0';

export const {actions, reducer} = createSlice({
    name: 'gamesCounterForFeedback',
    initialState: <StoreInner['gamesCounterForFeedback']>{
        counterForGames: 0,
        counterForPlatform: +platformEntriesInLocalStorage,
        gamesWithoutFeedback: getCookieGames('feedbackGames'),
        platformWithoutFeedback: getCookiePlatform('feedbackPlatform')
    },
    reducers,
});