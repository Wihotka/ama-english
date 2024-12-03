import React from 'react';
import styled, {css} from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {PuzzlesP} from '../../../type';

const Puzzle = styled.button<{mode:'input' | 'candidate'}>`
  color: #9066C6;
  
    ${props => {
        if (props.mode === 'candidate') {
            return css`
              filter: drop-shadow(0 4px 0 ${props => props.theme.colors.color8});

              &.pressedPuzzle {
                filter: drop-shadow(0 0 0 ${props => props.theme.colors.color8});
              }
            `;
        }
      
        return undefined;
    }};
`;

const InputField = styled.div`
  @media screen and (max-width: 854px) and (orientation: landscape) {
    border: 1px solid ${props => props.theme.colors.color5 + 'A3'}
  };
  @media screen and (max-width: 534px) and (orientation: portrait) {
    border: 1px solid ${props => props.theme.colors.color5 + 'A3'}
  }
`;

export const Puzzles = ({gamePlayData, handlePuzzle}:PuzzlesP) => {
    const {
        pseudoCurrentWordArray,
        normalPuzzlesArray,
        mixedPuzzlesArray,
        pressedPuzzleIndexes,
        successPuzzleIndexes,
        errorPuzzleIndexes,
        isHintButtonPressed,
        isCandidateFieldActive,
        isFieldUpdate
    } = gamePlayData;

    const wrapperClasses = classNames(
        styles.wrapper,
        isFieldUpdate ? styles.hiding : styles.showing
    );

    const getViewStatus = (letter:string, index:number, arr:Array<string>):boolean =>
        pseudoCurrentWordArray[index] === letter
            || isHintButtonPressed && index === 0 // first letter for hint
            || isHintButtonPressed && index === arr.length - 1; // last letter for hint

    const getInputPuzzleClasses = (isActivePuzzle:boolean, letter:string):string =>
        classNames(
            styles.inputPuzzle,
            letter === '-' || letter === ' ' ? styles.emptyPuzzle : '',
            isActivePuzzle ? styles.activePuzzle : ''
        );

    const getCandidatePuzzleClasses = (index:number):string =>
        classNames(
            styles.candidatePuzzle,
            pressedPuzzleIndexes.includes(index) ? styles.pressedPuzzle : '',
            pressedPuzzleIndexes.includes(index) ? 'pressedPuzzle' : '',
            successPuzzleIndexes.includes(index) ? styles.successPuzzle : '',
            errorPuzzleIndexes.includes(index) ? styles.errorPuzzle : ''
        );

    return (
        <div className={wrapperClasses}>

            <InputField className={styles.inputField}>
                {normalPuzzlesArray &&
                    normalPuzzlesArray
                        .map((letter, index, arr) => {
                            const isActivePuzzle = getViewStatus(letter, index, arr);
                            
                            switch (letter) {
                                case ' ':
                                    return <div key={index} className={styles.indent}/>;
                                case '-':
                                    return <div key={index} className={styles.indent}>-</div>;
                            }

                            return (
                                <Puzzle
                                    key={index}
                                    mode={'input'}
                                    className={getInputPuzzleClasses(isActivePuzzle, letter)}>
                                    {isActivePuzzle ? letter : pseudoCurrentWordArray[index]}</Puzzle>
                            );
                        })
                }
            </InputField>

            <div className={styles.candidateField}>
                {mixedPuzzlesArray &&
                    mixedPuzzlesArray
                        .map((letter, index) =>
                            <Puzzle
                                key={index}
                                mode={'candidate'}
                                disabled={isCandidateFieldActive}
                                className={getCandidatePuzzleClasses(index)}
                                onClick={(e) => handlePuzzle(e, index)}>{letter}</Puzzle>
                        )
                }
            </div>

        </div>
    );
};