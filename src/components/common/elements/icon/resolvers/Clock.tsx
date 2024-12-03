import React from 'react';
import styled from 'styled-components';

const ColoredIcon = styled.svg`
  & path {stroke: ${props => props.theme.colors.color6}}
`;

export const Clock = () =>
    <ColoredIcon
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none">
        <path
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"/>
        <path
            d="M24 12v12l6 6"
            stroke="#D3BBFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"/>
    </ColoredIcon>;