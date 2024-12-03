import {PayloadAction as PA} from '@reduxjs/toolkit';
// import {merge} from 'lodash';
import {HomeworkGameStatus} from '@custom-types';

export const setHomeworkGameStatus = (state:HomeworkGameStatus, action:PA<HomeworkGameStatus['status']>) => {
    // state = action.payload;
    state.status = action.payload;
    // merge(state, action.payload);
};
