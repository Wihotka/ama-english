import React from 'react';
import {TopPanelContentCb} from '@custom-types';
import {SomeGameNameGameT} from '../type';

export const getTopPanelContent:TopPanelContentCb<SomeGameNameGameT> = ({gamePlayData}) => {
    const {clicksQty} = gamePlayData;

    return <span>{clicksQty}</span>;
};