import React from 'react';

type P = {
    color:string;
};

export const Error = (p:P) => {
    const {color = '#38D800'} = p;

    return (
        <svg width={'1em'} height={'1em'} viewBox='0 0 6 6' fill='none'>
            <g opacity={0.6} fill={color}>
                <path d='M0 .4L.4 0 6 5.6l-.4.4z'/>
                <path d='M5.6 0l.4.4L.4 6 0 5.6z'/>
            </g>
        </svg>
    );
};