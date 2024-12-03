import React from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import {WordComponentP} from '../../../type';

import styles from './style.scss';

const WordLetter = styled.p`
  color: ${(props) => props.theme.colors.color4}
`;

export const Word = React.memo<WordComponentP>((props) => {
    const {animation, variant, field} = props;

    const animationWord = typeof animation !== 'undefined' && animation
        ? styles.hiding
        : styles.showing;

    return (
        <WordLetter className={classNames(styles.word, animationWord, styles[`word_${field}`])}>
            {variant.transcription}
        </WordLetter>
    );
});