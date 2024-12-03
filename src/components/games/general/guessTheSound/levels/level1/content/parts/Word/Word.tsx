import React from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import {WordComponentP} from '../../../type';

import styles from './style.scss';

type SelectedWordP = {
    studyStage?:number;
    level?:number;
};

const SelectWord = styled.span<SelectedWordP>`
    color: ${({studyStage, level, theme}) => studyStage === 3 || level === 2 ? theme.colors.color8 : theme.colors.color7};
`;

export const Word = React.memo<WordComponentP>((props) => {
    const {animation, variant, field, ...rest} = props;
    const {dividedTranscription, dividedWord, indexSelectedTranscription} = variant;

    const animationWord = typeof animation !== 'undefined' && animation
        ? styles.hiding
        : styles.showing;

    const stylesWord = classNames(styles.word, animationWord, styles[`word_${field}`]);

    return (
        <p className={stylesWord}>
            {dividedTranscription.map((sound, index) => {
                const letter = index === 0
                    ? dividedWord[index][0].toUpperCase() + dividedWord[index].slice(1)
                    : dividedWord[index];

                return index === indexSelectedTranscription
                    ? <SelectWord key={index} className={styles.selectWord} {...rest}>{letter}</SelectWord>
                    : `${letter}`;
            })}
        </p>
    );
});