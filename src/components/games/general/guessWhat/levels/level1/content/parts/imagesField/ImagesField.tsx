import {GuessWhat_Answer} from '../../../../../type';
import {classNames} from 'js-data-utils';
import React from 'react';
import styled from 'styled-components';
import styles from './style.scss';

type ImagesFieldP = {
    images:GuessWhat_Answer[];
    hiddenAnswers:string[];
    userAnswer:string;
    highlight:boolean;
    isCorrect:boolean;
    isFieldDisabled:boolean;
    changeUserAnswer:(userAnswer:string) => void;
};

const GridContainer = styled.div<{ cols:number }>`
    grid-template-columns: ${({cols}) =>
        `repeat(${cols}, auto)`};
`;

const StyledItem = styled.div<{ selected:boolean }>`
    border-color: ${({theme, selected}) =>
        selected ? theme.colors.color5 : 'transparent'};
`;

export const ImagesField = ({
    images,
    hiddenAnswers,
    userAnswer,
    highlight,
    isCorrect,
    isFieldDisabled,
    changeUserAnswer,
}:ImagesFieldP) => {
    const cols = Math.round(images.length / 2);
    const imageItemClassName = (word:string) =>
        classNames(
            styles.imageItem,
            highlight && userAnswer === word
                ? isCorrect
                    ? styles.correct
                    : styles.wrong
                : ''
        );

    return (
        <GridContainer cols={cols} className={styles.imagesFieldContainer}>
            {images.map(({img, word}, i) =>
                hiddenAnswers.includes(word) ? (
                    <div key={i}></div>
                ) : (
                    <StyledItem
                        key={i}
                        className={imageItemClassName(word)}
                        onClick={() =>
                            !isFieldDisabled && changeUserAnswer(word)
                        }
                        selected={word === userAnswer}
                    >
                        <img className={styles.img} src={img} alt={word} draggable='false'/>
                    </StyledItem>
                )
            )}
        </GridContainer>
    );
};
