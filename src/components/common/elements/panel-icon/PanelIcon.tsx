import React from 'react';

type P = {
    rotate:number;
};

export const PanelIcon = ({rotate}:P) =>
    <svg
        width={24}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            style={{transform: `rotate(${rotate}deg)`, transformOrigin: 'center'}}
            d="M.5 1.5a1.2 1.2 0 0 0 0 1.2L11 17.8a1.2 1.2 0 0 0 2 0L23.5 2.7a1.2 1.2 0 0 0-1-1.9h-21a1.2 1.2 0 0 0-1 .7Z"
            fill="#E4FAF5"
        />
    </svg>;