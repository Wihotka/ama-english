import React, {useMemo} from 'react';
import styled, {css} from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InputP} from '../../../type';

const InputCell = styled.div<{isSpecialSymbols:boolean}>`
    ${props => {
        if (props.isSpecialSymbols) {
            return css`
              border-bottom: 1px solid transparent;
            `;
        }
    
        return css`
          border-bottom: 1px solid ${props.theme.colors.color5};
        `;
    }}
`;

const InputLetter = styled.span`
    color: ${props => props.theme.colors.color2};
`;

export const Input = (props:InputP) => useMemo(() => {
    const {words, currentWordIndex, typedWord, selectionType, isFieldUpdated} = props;

    const currentWord = words[currentWordIndex].word.split('');

    const getInputFieldClasses = () =>
        classNames(
            styles.inputField,
            styles[`inputField_${selectionType}`],
            isFieldUpdated ? styles.update : ''
        );

    const isSpecialSymbols = (letter:string):boolean => letter === '-' || letter === ' ';

    return (
        <div className={styles.wrapper}>
            <div
                className={getInputFieldClasses()}>
                {currentWord &&
                    currentWord.map((letter, index) => (
                        <InputCell
                            key={index}
                            className={styles.inputCell}
                            isSpecialSymbols={isSpecialSymbols(letter)}>
                            <InputLetter
                                className={styles.inputLetter}>
                                {isSpecialSymbols(letter) ? letter : typedWord[index]}
                            </InputLetter>
                        </InputCell>
                    ))
                }
            </div>
        </div>
    );
}, [props.typedWord, props.selectionType, props.isFieldUpdated]);