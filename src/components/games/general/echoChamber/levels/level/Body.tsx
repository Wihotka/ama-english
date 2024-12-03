import React, {useState} from 'react';

import {Content} from './content';

import {handlePlay, handleDetails, handleSwitch, useTimer} from './utils';

import {EchoChamberT, handlePlayCBT, handleDetailsCBT, handleSwitchCBT} from './type';

export const Body = (props:EchoChamberT) => {
    const {game, speakTexts, changeGPDOnline, initFinishPlaying} = props;
    const {gameData, gamePlayData, gameConfig, gameSettings} = game;
    const {level, answersQty} = gameSettings;
    const {sentences} = gameData;
    const {currentSentenceIndex, isDetailsShowed, isSoundPlaying, mode, timer, isMandatoryTime} = gamePlayData;

    const playbackRate = gameConfig.levelConfigs?.[level].playbackRate;
    const isTheLastSentence = answersQty - 1 === currentSentenceIndex;

    const [isFieldUpdated, setIsFieldUpdated] = useState<boolean>(false);

    const handlePlayCB:handlePlayCBT = (mode) =>
        handlePlay({mode, sentences, speakTexts, playbackRate, currentSentenceIndex, changeGPDOnline});
    const handleDetailsCB:handleDetailsCBT = () =>
        handleDetails({changeGPDOnline, isDetailsShowed});
    const handleSwitchCB:handleSwitchCBT = () =>
        handleSwitch({currentSentenceIndex, changeGPDOnline, isTheLastSentence, initFinishPlaying, setIsFieldUpdated});

    useTimer({changeGPDOnline, timer});

    return (
        <Content
            mode={mode}
            sentences={sentences}
            handlePlayCB={handlePlayCB}
            isSoundPlaying={isSoundPlaying}
            handleSwitchCB={handleSwitchCB}
            isMandatoryTime={isMandatoryTime}
            handleDetailsCB={handleDetailsCB}
            isDetailsShowed={isDetailsShowed}
            isTheLastSentence={isTheLastSentence}
            currentSentenceIndex={currentSentenceIndex}
            isFieldUpdated={isFieldUpdated}/>
    );
};