import {TextTeaser_TextPart} from '../../../../../type';
import React from 'react';
import styles from './style.scss';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background: ${({theme}) => `linear-gradient(0deg, ${theme.colors.color1}CC, ${theme.colors.color1}CC), #FFFFFF`};
`;

type TextFinalP = {
    title:string;
    textParts:TextTeaser_TextPart[];
};

export const TextFinal = ({title, textParts}:TextFinalP) => (
    <StyledContainer className={styles.textContainer}>
        <p className={styles.textTitle}>{title}</p>
        <p className={styles.text}>{textParts.map((part) => `${part.text} `)}</p>
    </StyledContainer>
);
