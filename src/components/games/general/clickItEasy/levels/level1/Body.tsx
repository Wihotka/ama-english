import React, {useEffect} from 'react';

import {Content} from './content';

import {
    updateField,
    useMissedWords,
    handleKeyButton,
    setInputSelection,
    updateTypedSentence
} from './utils';

import {
    handleKeyT,
    ClickItEasyT1,
    updateFieldCBT,
    setInputSelectionCBT,
    updateTypedSentenceCBT
} from './type';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

export const Body = (props:ClickItEasyT1) => {
    const {game, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty} = gameSettings;
    const {sentences, normalSentences} = gameData;
    const {
        mistakeQty,
        missingWords,
        typedSentence,
        emptyPartIndexes,
        currentSentenceIndex,
        firstTryCorrectAnswerQty,
        secondTryCorrectAnswerQty
    } = gamePlayData;

    const missingWordsByWords = missingWords.map(word => word.word);

    const isInputFieldFull = normalSentences[currentSentenceIndex].length === typedSentence.length;
    const isMissedFieldFull = missingWordsByWords.length > 0 ? !missingWordsByWords.includes('  ') : false;

    const handleKey:handleKeyT = (word, action, index) => handleKeyButton({
        word,
        index,
        action,
        sentences,
        mistakeQty,
        missingWords,
        typedSentence,
        changeGPDOnline,
        isInputFieldFull,
        isMissedFieldFull,
        setInputSelectionCB,
        currentSentenceIndex
    });

    const setInputSelectionCB:setInputSelectionCBT = (type) =>
        setInputSelection({
            type,
            mistakeQty,
            typedSentence,
            updateFieldCB,
            changeGPDOnline,
            updateTypedSentenceCB,
            firstTryCorrectAnswerQty,
            secondTryCorrectAnswerQty,
        });

    const updateFieldCB:updateFieldCBT = () =>
        updateField({answersQty, changeGPDOnline, initFinishPlaying, currentSentenceIndex});
    const updateTypedSentenceCB:updateTypedSentenceCBT = () =>
        updateTypedSentence({normalSentences, currentSentenceIndex, typedSentence, changeGPDOnline});

    useMissedWords({typedSentence, changeGPDOnline, missingWords, emptyPartIndexes});

    useEffect(() => {
        mistakeQty === 1 && updateTypedSentenceCB();
        mistakeQty === 2 && setGameTimeout(() => updateFieldCB(), 500);
    }, [mistakeQty]);

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            gameSettings={gameSettings}

            handleKey={handleKey}

            isInputFieldFull={isInputFieldFull}
            isMissedFieldFull={isMissedFieldFull}/>
    );
};