import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {Metadata} from '@custom-types';

const initialState:Metadata = {
    // @ts-ignore
    common: null,
};

export const {actions, reducer} = createSlice({
    name: 'metadata',
    initialState,
    reducers,
    // extraReducers: {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     [runLoadMetadata.fulfilled]: (state, action) => {
    //
    //         if (!action.payload) return;
    //
    //         const langCode = action.payload.common?.settings?.langCode;
    //
    //         if (langCode !== 'ua') //якщо langCode не юа
    //             action.payload.common.settings.langCode = 'ru'; // примусове встановлення ру локалізації
    //
    //         loadLang(langCode).then();
    //
    //         document.querySelector('html')?.setAttribute('lang', langCode);
    //
    //         merge(state, action.payload);
    //     }
    // }
});