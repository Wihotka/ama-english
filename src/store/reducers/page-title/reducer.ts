import {createSlice} from '@reduxjs/toolkit';
import * as reducers from './reducers';
import {StoreInner} from '@store';

export const {actions, reducer} = createSlice({
    name: 'pageTitle',
    initialState: <StoreInner['pageTitle']>{
        main: '',
        sub: ''
    },
    reducers
});