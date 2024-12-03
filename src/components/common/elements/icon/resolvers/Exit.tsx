import React from 'react';

type P = {
    color:string;
};

export const Exit = ({color = '#000000'}:P) =>
    <svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke={color}
    >
        <path
            d="M1 6V4a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
        />
        <path
            d="M25 16a1 1 0 1 0 0-2v2ZM.293 14.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L2.414 15l5.657-5.657A1 1 0 0 0 6.657 7.93L.293 14.293ZM25 14H1v2h24v-2Z"
            fill={color}
            strokeWidth={.3}
        />
    </svg>;
// export const Exit = ({color = '#000000'}:P) =>
//     <svg
//         width={30}
//         height={30}
//         fill="none"
//         style={{marginLeft: '-4px'}}>
//         <path
//             d="m1.666 13.666 9.333-12v6.667c15.938 0 17.776 12.904 17.334 20-.67-3.58-.98-9.333-17.334-9.333v6.666l-9.333-12Z"
//             stroke={color}
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </svg>;