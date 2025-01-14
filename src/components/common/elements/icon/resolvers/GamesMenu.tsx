import React from 'react';

type P = {
    color:string;
};

export const GamesMenu = ({color = '#000000'}:P) =>
    <svg
        width={30}
        height={30}
        fill="none"
    >
        <mask id="a" fill={color}>
            <path d="M0 11.5c0 1 .8 1.9 1.9 1.9h9.6c1 0 1.9-.9 1.9-1.9V1.9c0-1-.9-1.9-1.9-1.9H1.9C.9 0 0 .8 0 1.9v9.6Zm16.6 0c0 1 .9 1.9 1.9 1.9h9.6c1 0 1.9-.9 1.9-1.9V1.9c0-1-.8-1.9-1.9-1.9h-9.6c-1 0-1.9.8-1.9 1.9v9.6ZM0 28.1c0 1 .8 1.9 1.9 1.9h9.6c1 0 1.9-.8 1.9-1.9v-9.6c0-1-.9-1.9-1.9-1.9H1.9c-1 0-1.9.9-1.9 1.9v9.6Zm16.6 0c0 1 .9 1.9 1.9 1.9h9.6c1 0 1.9-.8 1.9-1.9v-9.6c0-1-.8-1.9-1.9-1.9h-9.6c-1 0-1.9.9-1.9 1.9v9.6Z" />
        </mask>
        <path
            d="M1.9 15.4h9.6v-4H1.9v4Zm13.5-3.9V1.9h-4v9.6h4ZM11.5-2H1.9v4h9.6v-4ZM-2 1.9v9.6h4V1.9h-4Zm20.5 13.5h9.6v-4h-9.6v4ZM32 11.5V1.9h-4v9.6h4ZM28.1-2h-9.6v4h9.6v-4ZM14.6 1.9v9.6h4V1.9h-4ZM2 32h9.6v-4H1.9v4Zm13.5-3.9v-9.6h-4v9.6h4Zm-3.9-13.5H1.9v4h9.6v-4ZM-2 18.5v9.6h4v-9.6h-4ZM18.5 32h9.6v-4h-9.6v4ZM32 28.1v-9.6h-4v9.6h4Zm-3.9-13.5h-9.6v4h9.6v-4Zm-13.5 3.9v9.6h4v-9.6h-4Zm3.9-3.9a3.9 3.9 0 0 0-3.9 3.9h4l-.1.1v-4ZM32 18.5c0-2.1-1.7-3.9-3.9-3.9v4l-.1-.1h4ZM28.1 32c2.2 0 3.9-1.7 3.9-3.9h-4l.1-.1v4Zm-9.6-4 .1.1h-4c0 2.2 1.8 3.9 3.9 3.9v-4ZM1.9 14.6A3.9 3.9 0 0 0-2 18.5h4l-.1.1v-4Zm13.5 3.9c0-2.1-1.8-3.9-3.9-3.9v4l-.1-.1h4ZM11.5 32c2.1 0 3.9-1.7 3.9-3.9h-4l.1-.1v4Zm-9.6-4 .1.1h-4C-2 30.3-.3 32 1.9 32v-4ZM18.5-2a3.9 3.9 0 0 0-3.9 3.9h4l-.1.1v-4ZM32 1.9C32-.3 30.3-2 28.1-2v4l-.1-.1h4Zm-3.9 13.5c2.2 0 3.9-1.8 3.9-3.9h-4l.1-.1v4Zm-9.6-4 .1.1h-4c0 2.1 1.8 3.9 3.9 3.9v-4ZM1.9-2A3.9 3.9 0 0 0-2 1.9h4l-.1.1v-4Zm13.5 3.9c0-2.2-1.8-3.9-3.9-3.9v4l-.1-.1h4Zm-3.9 13.5c2.1 0 3.9-1.8 3.9-3.9h-4l.1-.1v4Zm-9.6-4 .1.1h-4c0 2.1 1.7 3.9 3.9 3.9v-4Z"
            fill={color}
            mask="url(#a)"
        />
    </svg>;