import React from 'react';

import {Input, Info, Keyboard, Timer} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handleKey} = props;
    const {startTimer, sentences, shuffledSentences} = gameData;
    const {timer, typedSentence, selectionType, isFieldUpdated, currentSentenceIndex, pressedKeyIndex} = gamePlayData;

    return (
        <div className={styles.wrapper}>
            <div className={styles.topContent}>
                <Info
                    sentences={sentences}
                    isFieldUpdated={isFieldUpdated}
                    currentSentenceIndex={currentSentenceIndex}/>
                <Timer
                    timer={timer}
                    startTimer={startTimer}/>
                <Input
                    sentences={sentences}
                    typedSentence={typedSentence}
                    selectionType={selectionType}
                    isFieldUpdated={isFieldUpdated}
                    currentSentenceIndex={currentSentenceIndex}/>
            </div>
            <Keyboard
                handleKey={handleKey}
                typedSentence={typedSentence}
                isFieldUpdated={isFieldUpdated}
                pressedKeyIndex={pressedKeyIndex}
                shuffledSentences={shuffledSentences}
                currentSentenceIndex={currentSentenceIndex}/>
        </div>
    );
};