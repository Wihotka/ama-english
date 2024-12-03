import React from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import styles from './style.scss';

type DragItemP = {
    isDragging?:boolean;
    className?:string;
};

const StyledItem = styled.div<DragItemP>`
    ${({theme, isDragging}) => ({
        background: theme.colors.gradient5,
        border: `1px solid ${theme.colors.color1}A3`,
        boxShadow: isDragging
            ? `0px 4px 0px ${theme.colors.color1}`
            : `0px 4px 0px ${theme.colors.color1}, 2px 8px 24px rgba(56, 22, 109, 0.48)`,
        opacity: isDragging ? '0.24' : '1',

        ':hover': {
            background: theme.colors.gradient6,
            boxShadow: `0px 4px 0px ${theme.colors.color1}`,
        }
    })}
`;

export const DragItem = ({children, className, ...props}:React.PropsWithChildren<DragItemP>) => (
    <StyledItem className={classNames(styles.item, className || '')} {...props}>
        {children}
    </StyledItem>
);
