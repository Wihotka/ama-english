import React from 'react';
import styled from 'styled-components';

const ColoredIcon = styled.svg`
  & path {
    stroke: ${props => props.theme.colors.color6};
    fill: ${props => props.theme.colors.color6};
  }
`;

export const Like = () =>
    <ColoredIcon
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        fill="none">
        <path d="m7.788 11.874-.088.128V24.5h12.86a1.698 1.698 0 0 0 1.684-1.449L23.9 12.258v-.001a1.7 1.7 0 0 0-1.723-1.957H14.7V4.8c0-.637-.213-1.345-.553-1.935-.336-.583-.844-1.134-1.495-1.341l-.437-.14-.176.423-4.085 9.77a1.893 1.893 0 0 1-.166.297ZM5.8 24.5h.5V12.7H3.4a2.05 2.05 0 0 0-1.264.464c-.346.281-.636.712-.636 1.236v8.4c0 .525.29.955.636 1.237.347.282.806.463 1.264.463h2.4Zm.42-13.2h.321l.134-.292 4.483-9.8.002-.005a.7.7 0 0 1 .64-.415c1.202 0 2.11.417 2.723 1.097.618.685.977 1.685.977 2.915v4.7h6.684c1.008-.011 1.892.2 2.439.828.293.337.41.614.452.902.046.311.01.669-.07 1.195v.004l-1.5 10.496v.002c-.234 1.538-1.442 2.59-2.964 2.573H3.4c-.894 0-1.615-.271-2.108-.723C.805 24.33.5 23.67.5 22.8v-8.4c0-1.75 1.225-3.1 2.9-3.1h2.82Z"/>
    </ColoredIcon>;
