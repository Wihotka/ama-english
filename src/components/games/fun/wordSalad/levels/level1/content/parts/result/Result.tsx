import React from 'react';

import styles from './style.scss';

import {WordSalad_GamePlayData} from '../../../../../type';

type ResultP = {
    selectedWords:WordSalad_GamePlayData['selectedWords']
};

export const Result = ({selectedWords}:ResultP) => (
    <div className={styles.result}>
        <div className={styles.heading}>
            <p className={styles.word}>Word</p>
            <p className={styles.scores}>Point</p>
        </div>
        {selectedWords.map(({word, scores}:{ word:string, scores:number }, i:number) => (
            <div className={styles.wordWrapper} key={i}>
                <p className={styles.word}>{word.charAt(0) + word.substring(1).toLowerCase()}</p>
                <p className={styles.scores}>{scores}</p>
            </div>
        ))}
    </div>);

