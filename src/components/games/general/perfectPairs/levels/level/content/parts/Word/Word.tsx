import React from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import {WordComponentP} from '../../../type';

import styles from './style.scss';

const WordLetter = styled.p`
  color: ${(props) => props.theme.colors.color4}
`;

export const Word = React.memo<WordComponentP>((props) => {
    const {animation, variant,level} = props;

    const animationWord = typeof animation !== 'undefined' && animation
        ? styles.hiding
        : styles.showing;

    return (
        <WordLetter className={classNames(styles.word, animationWord)}>
            {level === 1 && variant.word[0].toUpperCase() + variant.word.slice(1)}
            {level === 2 && variant.transcription}
        </WordLetter>
    );
});