import React from 'react';
import {classNames} from 'js-data-utils';

import {LocalizedText} from '@components/common';

import styles from './style.scss';

import {WordSalad_GamePlayData} from '../../../../../type';

type LettersP = {
    gamePlayData:WordSalad_GamePlayData;
    handleInput:Function;
    handleEnter:Function;
};

export const Letters = ({gamePlayData, handleInput, handleEnter}:LettersP) => {
    const {letters, inputIndexes, gameIsActive, answerStatus} = gamePlayData;

    return (
        <div className={styles.lettersWrap}>
            <div className={styles.letters}>
                {letters.map((letter, index) => <div
                    className={classNames(styles.letter, inputIndexes.includes(index)
                        ? styles.activeLetter
                        : '')}
                    onClick={() => gameIsActive
                        ? handleInput(index)
                        : null}
                    key={index}>
                    {letter}
                </div>)}
            </div>
            <button
                className={styles.checkBtn}
                onClick={() => answerStatus === null
                    ? handleEnter()
                    : null}>
                <LocalizedText name={'check'} path={'games/fun/wordSalad/translation'}/>
            </button>
        </div>
    );
};
