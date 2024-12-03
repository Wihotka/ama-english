import React, {useState, useEffect} from 'react';

import {Btn} from '@components/common/elements';
import {Input, Interactive, Keyboard} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, gameSettings, handlePlay, handleHint, handleKey, isInputFieldFull, isMissedFieldFull} = props;
    const {hint} = gameSettings;
    const {words, keyboard} = gameData;
    const {
        typedWord,
        pressedKey,
        selectionType,
        isFieldUpdated,
        currentWordIndex,
        isPlayButtonPressed,
        isHintButtonPressed
    } = gamePlayData;

    const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);

    const handleClick = (currentTarget:any) => {
        handleKey(currentTarget);
        setIsBtnClicked(true);
    };

    //Сбрасываем стейт клика при изменении слова
    useEffect(() => {
        if (isBtnClicked) setIsBtnClicked(false);
    }, [typedWord]);

    return (
        <div className={styles.wrapper}>
            <Interactive
                hint={hint}
                handlePlay={handlePlay}
                handleHint={handleHint}
                currentWordIndex={currentWordIndex}
                isHintButtonPressed={isHintButtonPressed}
                isPlayButtonPressed={isPlayButtonPressed}/>
            <div className={styles.wrapper__second}>
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
            </div>
            <Btn
                className={styles.checkBtn}
                textCode={'check'}
                type={'primary'}
                value={'Enter'}
                disabled={!isInputFieldFull || !isMissedFieldFull || isBtnClicked}
                handler={({currentTarget}:any) => handleClick(currentTarget.value)}/>
        </div>
    );
};