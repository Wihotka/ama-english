import React, {useState, useEffect} from 'react';
import {lowerCase} from 'lodash';

import {Btn} from '@components/common/elements';
import {Input, Interactive, Keyboard} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, gameSettings, handlePlay, handleKey, isInputFieldFull, isMissedFieldFull} = props;
    const {level} = gameSettings;
    const {words, keyboard} = gameData;
    const {
        typedWord,
        pressedKey,
        selectionType,
        isFieldUpdated,
        currentWordIndex,
        isPlayButtonPressed
    } = gamePlayData;

    const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);

    const handleBtnClick = ({currentTarget}:any) => {
        if (typedWord.join('').replace('-', ' ') === lowerCase(words[currentWordIndex].word)) {
            setIsBtnClicked(true);
        }
        
        handleKey(currentTarget.value);
    };

    useEffect(() => setIsBtnClicked(false), [currentWordIndex]);

    return (
        <div className={styles.wrapper}>
            <Interactive
                level={level}
                words={words}
                handlePlay={handlePlay}
                isFieldUpdated={isFieldUpdated}
                currentWordIndex={currentWordIndex}
                isPlayButtonPressed={isPlayButtonPressed}/>
            <Input
                words={words}
                typedWord={typedWord}
                selectionType={selectionType}
                isFieldUpdated={isFieldUpdated}
                currentWordIndex={currentWordIndex}/>
            <Keyboard
                keyboard={keyboard}
                handleKey={handleKey}
                pressedKey={pressedKey}/>
            <Btn
                className={styles.checkBtn}
                textCode={'check'}
                type={'primary'}
                value={'Enter'}
                disabled={!isInputFieldFull || !isMissedFieldFull || isBtnClicked}
                handler={handleBtnClick}/>
        </div>
    );
};