import {PayloadAction as PA} from '@reduxjs/toolkit';
import {merge} from 'lodash';
import {Metadata} from '@custom-types';

export const setMetadata = (state:Metadata, action:PA<Metadata>) => {

    merge(state, action.payload);
};
