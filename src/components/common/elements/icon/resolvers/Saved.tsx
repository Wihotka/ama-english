import React from 'react';

type P = {
    color:string;
};

export const Saved = (p:P) => {
    const {color = '#38D800'} = p;

    return (
        <svg viewBox='0 0 24 22' width='1em' height='1em' fill='none'>
            <path
                d='M22.6 1.4l-.5-.4A1.3 1.3 0 0021 1c-.2 0-.4.2-.5.4l-11.8 15-5-6.3-.5-.5a1.3 1.3 0 00-1.2 0l-.6.5-.3.7a2.5 2.5 0 000 1.5l.4.7 6 7.7.6.4a1.3 1.3 0 001.2 0c.2 0 .4-.2.5-.4l13-16.3.3-.7A2.5 2.5 0 0023 2a2 2 0 00-.4-.7z'
                fill={color}/>
        </svg>
    );
};
