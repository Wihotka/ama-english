import React, {FC} from 'react';
import {LocalizedTextComp} from './LocalizedTextComp';

export type LocalizedTextP = {
    name:string;
    path?:string;
    withoutPrefix?:string;
    useSuspense?:boolean;
};

export const LocalizedText:FC<LocalizedTextP> = (p) => <LocalizedTextComp {...p}/>;