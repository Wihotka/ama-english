import {PayloadAction as PA} from '@reduxjs/toolkit';
import {StoreInner} from '@store';

export const setStudyStage = (state:StoreInner['subjectInfo'], action:PA<number>) => {
    state.studyStage = action.payload;
};
