import React, {useState} from 'react';

import {Content} from './content';

import {
    useTimer,
    useInput,
    useKeyboard,
    updateField,
    setPressedKey,
    deleteExtraKeys,
    handleKeyButton,
    handlePlayButton,
    setInputSelection
} from './utils';

import {
    WordpadT2,
    handleKeyT,
    handlePlayT,
    updateFieldCBT,
    setPressedKeyCBT,
    deleteExtraKeysCBT,
    setInputSelectionCBT,
} from './type';

export const Body = (props:WordpadT2) => {
    const {game, changeGPDOnline, speakTexts, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty} = gameSettings;
    const {words, startTimer, keyboard} = gameData;
    const {
        timer,
        answerQty,
        typedWord,
        pressedKey,
        removedKeys,
        isTimerBegan,
        isKeyPressed,
        selectionType,
        timeForRemoveKey,
        currentWordIndex,
        currentLetterIndex
    } = gamePlayData;

    // Дефолтное время таймера для корректного сброса таймера
    const [defaultTimer] = useState<number>(timer);

    const handlePlay:handlePlayT = () =>
        handlePlayButton({words, currentWordIndex, speakTexts, changeGPDOnline});
    const handleKey:handleKeyT = (letter:string) =>
        handleKeyButton({letter, setPressedKeyCB});

    const setPressedKeyCB:setPressedKeyCBT = (code) =>
        setPressedKey({code, isKeyPressed, removedKeys, isTimerBegan, changeGPDOnline});
    const setInputSelectionCB:setInputSelectionCBT = (type) =>
        setInputSelection({type, updateFieldCB, changeGPDOnline, answerQty});

    const updateFieldCB:updateFieldCBT = () =>
        updateField({answersQty, changeGPDOnline, initFinishPlaying, currentWordIndex, startTimer});
    const deleteExtraKeysCB:deleteExtraKeysCBT = () =>
        deleteExtraKeys({words, currentWordIndex, currentLetterIndex, removedKeys, keyboard, timeForRemoveKey, changeGPDOnline});

    useTimer({timer, isTimerBegan, defaultTimer, timeForRemoveKey, changeGPDOnline, updateFieldCB, deleteExtraKeysCB});
    useKeyboard({typedWord, isTimerBegan, setPressedKeyCB});
    useInput({
        words,
        timer,
        typedWord,
        pressedKey,
        isKeyPressed,
        selectionType,
        changeGPDOnline,
        currentWordIndex,
        currentLetterIndex,
        setInputSelectionCB
    });

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            gameSettings={gameSettings}

            handlePlay={handlePlay}
            handleKey={handleKey}/>
    );
};