import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {StoreInner} from '@store';

export const {actions, reducer} = createSlice({
    name: 'interfaceVolume',
    initialState: <StoreInner['interfaceVolume']>{
        isMuted: false,
        volume: .6,
        oldVolume: .6
    },
    reducers,
});