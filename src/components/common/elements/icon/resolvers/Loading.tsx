import React from 'react';

type P = {
    color:string;
};

export const Loading = ({color = '#7141B7'}:P) =>
    <svg width='1em' height='1em' viewBox='0 0 38 38' stroke={color}>
        <g transform='translate(1 1)'
            strokeWidth={2}
            fill='none'
            fillRule='evenodd'>
            <circle strokeOpacity={0.72} cx={18} cy={18} r={18}/>
            <path d='M36 18c0-9.94-8.06-18-18-18'>
                <animateTransform
                    attributeName='transform'
                    type='rotate'
                    from='0 18 18'
                    to='360 18 18'
                    dur='1s'
                    repeatCount='indefinite'/>
            </path>
        </g>
    </svg>;
