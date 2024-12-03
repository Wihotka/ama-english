import React, {useMemo} from 'react';
import styled, {css} from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InputP, selections} from '../../../type';

const InputField = styled.div<{type:string, index:number}>`
    ${props => {
        switch (props.type) {
            case selections.success:
                return css`
                  ${InputCell}:nth-child(${props.index}) {
                    ${InputLetter} {
                      color: ${props => props.theme.colors.color2};
                    }
                  }

                  box-shadow: 4px 8px 24px rgba(144, 102, 198, 0.16), inset 0 0 24px rgba(10, 241, 33, 0.56) !important;
                `;
            case selections.error:
                return css`
                  ${InputCell}:nth-child(${props.index}) {
                    ${InputLetter} {
                      color: #FE3A3A
                    }
                  }
                `;
            default:
                return null;
        }
    }}
`;

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
            isFieldUpdated ? styles.update : ''
        );

    const isSpecialSymbols = (letter:string):boolean => letter === '-' || letter === ' ';

    return (
        <div className={styles.wrapper}>
            <InputField
                type={selectionType}
                index={typedWord.length}
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
            </InputField>
        </div>
    );
}, [props.typedWord, props.selectionType, props.isFieldUpdated]);