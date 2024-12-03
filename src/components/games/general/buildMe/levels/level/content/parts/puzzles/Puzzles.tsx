import React from 'react';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {PuzzlesP} from '../../../type';

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
            successPuzzleIndexes.includes(index) ? styles.successPuzzle : '',
            errorPuzzleIndexes.includes(index) ? styles.errorPuzzle : ''
        );

    return (
        <div className={wrapperClasses}>

            <div className={styles.inputField}>
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
                                <button
                                    key={index}
                                    className={getInputPuzzleClasses(isActivePuzzle, letter)}>
                                    {isActivePuzzle ? letter : pseudoCurrentWordArray[index]}</button>
                            );
                        })
                }
            </div>

            <div className={styles.candidateField}>
                {mixedPuzzlesArray &&
                    mixedPuzzlesArray
                        .map((letter, index) =>
                            <button
                                disabled={isCandidateFieldActive}
                                key={index}
                                className={getCandidatePuzzleClasses(index)}
                                onClick={(e) => handlePuzzle(e, index)}>{letter}</button>
                        )
                }
            </div>

        </div>
    );
};