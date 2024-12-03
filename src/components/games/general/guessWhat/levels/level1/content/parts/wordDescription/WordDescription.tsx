import {classNames} from 'js-data-utils';
import React from 'react';
import styled from 'styled-components';
import styles from './style.scss';

type WordDescriptionP = {
    description:string;
    word:string;
    highlight:boolean;
    isCorrect:boolean;
};

const StyledText = styled.p<{isCorrect:boolean}>`
    color: ${({theme}) => theme.colors.color2};

    &::first-letter {
        text-transform: ${({isCorrect}) => isCorrect ? 'uppercase' : ''}
    }
`;

export const WordDescription = ({
    description,
    word,
    highlight,
    isCorrect
}:WordDescriptionP) => {
    const wordClassName = classNames(
        styles.wordDescriptionContainer,
        highlight && isCorrect ? styles.highlight : ''
    );

    return (
        <div className={wordClassName}>
            <StyledText
                className={styles.wordDescriptionText}
                isCorrect={isCorrect}
            >
                {isCorrect ? word : description}
            </StyledText> 
        </div>
    );
};
