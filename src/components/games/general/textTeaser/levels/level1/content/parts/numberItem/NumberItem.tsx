import React from 'react';
import styled from 'styled-components';
import styles from './style.scss';

const StyledItem = styled.div`
    ${({theme}) => ({
        borderColor: theme.colors.color1 + 'A3',
        background: theme.colors.gradient13
    })}
`;

type NumberItemP = {
    number:number;
};

export const NumberItem = ({number}:NumberItemP) => (
    <StyledItem className={styles.numberItem}>{number}</StyledItem>
);
