import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {StoreInner} from '@store';

export const {actions, reducer} = createSlice({
    name: 'subjectInfo',
    initialState: <StoreInner['subjectInfo']>{
        studyStage: 1
    },
    reducers,
});