import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {HomeworkGameStatus} from '@custom-types';

const initialState:HomeworkGameStatus = {
    status: null
};

export const {actions, reducer} = createSlice({
    name: 'HomeworkGameStatus',
    initialState,
    reducers,
});