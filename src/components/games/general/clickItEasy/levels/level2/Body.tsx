import React, {useEffect} from 'react';

import {Content} from './content';

import {
    useTimer,
    updateField,
    handleKeyButton,
    setInputSelection,
} from './utils';

import {
    handleKeyT,
    ClickItEasyT2,
    updateFieldCBT,
    setInputSelectionCBT,
} from './type';

export const Body = (props:ClickItEasyT2) => {
    const {game, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameSettings} = game;
    const {answersQty} = gameSettings;
    const {sentences, normalSentences, startTimer} = gameData;
    const {timer, typedSentence, currentSentenceIndex, answerQty, mistakeQty} = gamePlayData;

    const handleKey:handleKeyT = (word, index) => {
        handleKeyButton({
            word,
            index,
            sentences,
            mistakeQty,
            typedSentence,
            normalSentences,
            changeGPDOnline,
            setInputSelectionCB,
            currentSentenceIndex
        });
    };

    const setInputSelectionCB:setInputSelectionCBT = (type) =>
        setInputSelection({type, answerQty, typedSentence, updateFieldCB, changeGPDOnline, mistakeQty});

    const updateFieldCB:updateFieldCBT = () =>
        updateField({startTimer, answersQty, changeGPDOnline, initFinishPlaying, currentSentenceIndex});

    useTimer({timer, changeGPDOnline, updateFieldCB});

    useEffect(() => {
        mistakeQty >= 2 && setTimeout(() => {
            updateFieldCB();
        }, 500);
    }, [mistakeQty]);

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            gameSettings={gameSettings}

            handleKey={handleKey}/>
    );
};