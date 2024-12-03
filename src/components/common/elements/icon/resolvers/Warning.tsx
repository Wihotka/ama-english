import React from 'react';

type P = {
    color:string;
};

export const Warning = (p:P) => {
    console.log(p);

    return (
        <svg width={'1em'} height={'1em'} viewBox='150 190 216 96' style={{transform: 'rotate(180deg)'}}>
            <path d='M256 214.3c-11 0-20 9-20 20v128.8a20 20 0 1040 0V234.3c0-11-9-20-20-20z' />
            <circle cx={256} cy={162.8} r={27} />
        </svg>
    );
};
