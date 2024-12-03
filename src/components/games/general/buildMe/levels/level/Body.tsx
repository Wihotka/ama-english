import React from 'react';

import {Content} from './content';

import {handlePuzzleCB} from './utils';
import {handleVoiceCB} from './utils';
import {handleHintCB} from './utils';

import {useCurrentState} from './utils';

import {BuildMeT} from './type';

export const Body = ({game, speakTexts, changeGPDOnline, initFinishPlaying}:BuildMeT) => {
    const {gamePlayData, gameData} = game;

    useCurrentState({game, changeGPDOnline, initFinishPlaying});

    const handleHint = () =>
        handleHintCB({gameData, gamePlayData, changeGPDOnline, initFinishPlaying});
    const handlePuzzle = (e:React.MouseEvent<HTMLButtonElement>, index:number) =>
        handlePuzzleCB({e, index, gameData, gamePlayData, changeGPDOnline});
    const handleVoice = () =>
        handleVoiceCB({gameData, gamePlayData, speakTexts, changeGPDOnline});

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}

            handleHint={handleHint}
            handlePuzzle={handlePuzzle}
            handleVoice={handleVoice}
        />
    );
};