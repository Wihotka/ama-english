import {PayloadAction as PA} from '@reduxjs/toolkit';

export const setAppLang = (state:string, action:PA<string>) => state = action.payload;
