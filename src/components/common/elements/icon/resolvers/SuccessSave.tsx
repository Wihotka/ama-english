import React from 'react';
import styled from 'styled-components';

const ColoredIcon = styled.svg`
  & path {stroke: ${props => props.theme.colors.color6}}
`;

export const SuccessSave = () =>
    <ColoredIcon
        viewBox='0 0 38 26'
        width='1em'
        height='1em'
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M29.154 12.307c-.64-6.457-5.12-10.384-10.384-10.384-4.976 0-8.181 3.476-9.231 6.923-4.327.433-8.077 3.143-8.077 8.077 0 4.76 3.894 8.077 8.654 8.077h18.75c3.966 0 7.211-1.98 7.211-6.346 0-4.314-3.822-6.185-6.923-6.347Z"
            strokeWidth={2}
            strokeLinejoin="round"/>
        <path
            d="m23.168 10-7.774 9.23-3.332-3.691"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"/>
    </ColoredIcon>;
