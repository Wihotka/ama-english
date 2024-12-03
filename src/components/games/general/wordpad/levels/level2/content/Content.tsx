import React from 'react';

import {Input, Interactive, Keyboard, Timer} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handlePlay, handleKey} = props;
    const {words, keyboard, startTimer} = gameData;
    const {
        timer,
        typedWord,
        pressedKey,
        removedKeys,
        isTimerBegan,
        selectionType,
        isFieldUpdated,
        currentWordIndex,
        isPlayButtonPressed
    } = gamePlayData;

    return (
        <div className={styles.wrapper}>
            <Interactive
                handlePlay={handlePlay}
                currentWordIndex={currentWordIndex}
                isPlayButtonPressed={isPlayButtonPressed}/>
            <div className={styles.wrapper__second}>
                <Timer
                    timer={timer}
                    startTimer={startTimer}/>
                <Input
                    words={words}
                    typedWord={typedWord}
                    selectionType={selectionType}
                    isFieldUpdated={isFieldUpdated}
                    currentWordIndex={currentWordIndex}/>
                <Keyboard
                    keyboard={keyboard}
                    handleKey={handleKey}
                    pressedKey={pressedKey}
                    removedKeys={removedKeys}
                    isTimerBegan={isTimerBegan}/>
            </div>
        </div>
    );
};