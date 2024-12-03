import {PayloadAction as PA} from '@reduxjs/toolkit';
import {merge} from 'lodash';
import {StoreInner} from '@store';

export const setRegistry = (state:StoreInner['registry'], action:PA<StoreInner['registry']>) => {
    merge(state, action.payload);
};
