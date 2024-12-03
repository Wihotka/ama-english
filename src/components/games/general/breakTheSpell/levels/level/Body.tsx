import React from 'react';

import {Content} from './content';

import {
    updateField,
    setInputValue,
    updateTypedWord,
    useMissedLetter,
    handleKeyButton,
    handlePlayButton,
    useKeyboardEvents,
    setInputSelection
} from './utils';

import {
    BreakTheSpell,
    handleKeyT,
    handlePlayT,
    updateFieldCBT,
    setInputValueCBT,
    updateTypedWordCBT,
    setInputSelectionCBT
} from './type';

export const Body = (props:BreakTheSpell) => {
    const {game, changeGPDOnline, speakTexts, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty} = gameSettings;
    const {words} = gameData;
    const {
        typedWord,
        mistakeQty,
        missingLetters,
        emptyPartIndexes,
        currentWordIndex,
        firstTryCorrectAnswerQty,
        secondTryCorrectAnswerQty
    } = gamePlayData;

    const isInputFieldFull = words[currentWordIndex].word.length === typedWord.length;
    const isMissedFieldFull = missingLetters.length === emptyPartIndexes.length;

    const handlePlay:handlePlayT = () =>
        handlePlayButton({words, currentWordIndex, speakTexts, changeGPDOnline});
    const handleKey:handleKeyT = (letter:string) => 
        handleKeyButton({letter, setInputValueCB});

    const setInputValueCB:setInputValueCBT = (code) =>
        setInputValue({
            code,
            words,
            typedWord,
            mistakeQty,
            missingLetters,
            changeGPDOnline,
            isInputFieldFull,
            currentWordIndex,
            isMissedFieldFull,
            setInputSelectionCB
        });
    const setInputSelectionCB:setInputSelectionCBT = (type) =>
        setInputSelection({
            type,
            typedWord,
            mistakeQty,
            updateFieldCB,
            changeGPDOnline,
            updateTypedWordCB,
            firstTryCorrectAnswerQty,
            secondTryCorrectAnswerQty,
        });

    const updateFieldCB:updateFieldCBT = () =>
        updateField({answersQty, changeGPDOnline, initFinishPlaying, currentWordIndex});
    const updateTypedWordCB:updateTypedWordCBT = () =>
        updateTypedWord({words, currentWordIndex, typedWord, changeGPDOnline});

    useKeyboardEvents({typedWord, setInputValueCB, changeGPDOnline, isInputFieldFull});
    useMissedLetter({typedWord, changeGPDOnline, missingLetters, emptyPartIndexes});

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            gameSettings={gameSettings}

            handlePlay={handlePlay}
            handleKey={handleKey}

            isInputFieldFull={isInputFieldFull}
            isMissedFieldFull={isMissedFieldFull}/>
    );
};