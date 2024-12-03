import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {StoreInner} from '@store';

export const {actions, reducer} = createSlice({
    name: 'langCode',
    initialState: <StoreInner['registry']> {
        devModeInProd: false
    },
    reducers,
});