import {PayloadAction as PA} from '@reduxjs/toolkit/dist/createAction';
import {StoreInner} from '@store';

export const setMainTitle = (state:StoreInner['pageTitle'], action:PA<string>) => {
    state.main = action.payload;
};

export const setSubTitle = (state:StoreInner['pageTitle'], action:PA<string>) => {
    state.sub = action.payload;
};
