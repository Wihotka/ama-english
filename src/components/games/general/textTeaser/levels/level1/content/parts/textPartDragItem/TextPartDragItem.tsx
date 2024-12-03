import {classNames} from 'js-data-utils';
import React from 'react';
import styled from 'styled-components';

import styles from './style.scss';

type TextPartDragItemP = {
    isDragging?:boolean;
    isDragDisabled?:boolean;
    className?:string;
    highlight?:boolean;
    disableHover?:boolean;
};

const StyledItem = styled.div<TextPartDragItemP>`
    ${({theme, isDragging, isDragDisabled, highlight, disableHover}) => ({
        background: highlight ? `${theme.colors.gradient13} !important` : theme.colors.gradient5,
        border: `2px solid ${theme.colors.color1}A3`,
        opacity: isDragging ? 0.24 : 1,
        boxShadow: isDragging ? 'none' : `0px 8px 0px ${theme.colors.color1}, 2px 8px 24px rgba(56, 22, 109, 0.32)`,
        
        ':hover': {
            background: isDragDisabled || disableHover ? '' : theme.colors.gradient6
        },

        ':before': {
            background: theme.colors.gradient13
        }
    })}

    @media (max-width: 1280px) {
        ${({theme, isDragging}) => ({
        boxShadow: isDragging ? 'none' : `0px 4px 0px ${theme.colors.color1}, 2px 8px 24px rgba(56, 22, 109, 0.32)`,
    })}
    }
`;

export const TextPartDragItem = ({children, className, ...props}:React.PropsWithChildren<TextPartDragItemP>) => (
    <StyledItem className={classNames(styles.item, className || '')} {...props}>
        {children}
    </StyledItem>
);
