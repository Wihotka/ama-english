import React from 'react';

type P = {
    color:string;
};

export const Text = ({color = '#000000'}:P) =>
    <svg width='1em' height='1em' viewBox='0 0 20 19' fill='none'>
        <path
            d='M18.4 0H1.1A1 1 0 000 1v3.3a1 1 0 002.2 0V2.2h6.5v14H6.5a1 1 0 100 2.2H13a1 1 0 000-2.1h-2.2V2.2h6.5v2.1a1 1 0 002.2 0V1.1a1 1 0 00-1-1.1z'
            fill={color}/>
    </svg>;