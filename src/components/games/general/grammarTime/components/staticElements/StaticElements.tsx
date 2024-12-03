import React from 'react';
import styled from 'styled-components';

import {GrammarTime_StaticElement} from '../../type';

import styles from './style.scss';

type StaticElementsP = {
    staticElements:GrammarTime_StaticElement[];
};

const StyledItem = styled.div`
    ${({theme}) => ({
        background: theme.colors.gradient13,
        borderColor: theme.colors.color1 + 'A3',

        '::after': {
            background: theme.colors.gradient13
        }
    })}
`;

export const StaticElements = ({staticElements}:StaticElementsP) => (
    <div className={styles.staticElementsContainer}>
        {staticElements.map(({text}, i) => (
            <StyledItem key={i} className={styles.staticItem}>{text}</StyledItem>
        ))}
    </div>
);
