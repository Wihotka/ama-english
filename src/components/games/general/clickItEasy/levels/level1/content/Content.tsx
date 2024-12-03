import React, {useState, useEffect} from 'react';

import {Btn} from '@components/common/elements';
import {Input, Info, Keyboard} from './parts';

import styles from './style.scss';

import {ContentP, keyActions} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handleKey, isInputFieldFull, isMissedFieldFull} = props;
    const {sentences, shuffledSentences} = gameData;
    const {typedSentence, selectionType, isFieldUpdated, currentSentenceIndex,} = gamePlayData;

    const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);

    const handleClick = (currentTarget:any) => {
        handleKey(currentTarget, keyActions.compare);
        setIsBtnClicked(true);
    };

    //Сбрасываем стейт клика при переходе к следующему вопросу
    useEffect(() => {
        if (!isInputFieldFull) setIsBtnClicked(false);
    }, [isInputFieldFull]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.topContent}>
                <Info
                    sentences={sentences}
                    isFieldUpdated={isFieldUpdated}
                    currentSentenceIndex={currentSentenceIndex}/>
                <Input
                    sentences={sentences}
                    handleKey={handleKey}
                    typedSentence={typedSentence}
                    selectionType={selectionType}
                    isFieldUpdated={isFieldUpdated}
                    currentSentenceIndex={currentSentenceIndex}/>
            </div>
            <Keyboard
                handleKey={handleKey}
                typedSentence={typedSentence}
                isFieldUpdated={isFieldUpdated}
                shuffledSentences={shuffledSentences}
                currentSentenceIndex={currentSentenceIndex}/>
            <Btn
                className={styles.checkBtn}
                textCode={'check'}
                type={'primary'}
                value={'Enter'}
                disabled={(!isInputFieldFull && !isMissedFieldFull) || isBtnClicked}
                handler={({currentTarget}:any) => handleClick(currentTarget.value)}/>
        </div>
    );
};