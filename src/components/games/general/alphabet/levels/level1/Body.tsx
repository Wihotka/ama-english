import React from 'react';
import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {Content} from './content';

import {useTimer} from './utils';

import {AlphabetL1T, LetterT} from './type';

export const Body = (p:AlphabetL1T) => {
    const {game, speakTexts, changeGPDOnline, initFinishPlaying} = p;
    const {gamePlayData, gameData, gameSettings} = game;
    const {mode} = gameSettings;
    const {currentIndex, userTime} = gamePlayData;
    const {data} = gameData;

    const handleClick = (index:number) => {
        const isCorrect = currentIndex === index;
        const letterData = data.find(e => e.index === index) as LetterT;

        if (isCorrect) speakTexts({text: letterData.letter, type: 'letter'});

        if (isCorrect && (!data[currentIndex + 1])) {
            setGameTimeout(() => {
                initFinishPlaying();
            }, 500);
        } else {
            changeGPDOnline({
                mistakeIndex: isCorrect ? null : index,
                currentIndex: isCorrect ? currentIndex + 1 : currentIndex
            });
        }

        if (!isCorrect) {
            setGameTimeout(() => {
                changeGPDOnline({
                    mistakeIndex: null
                });
            }, 600);
        }
    };

    useTimer({userTime, initFinishPlaying, mode, changeGPDOnline});

    return (
        <Content
            gamePlayData={gamePlayData}
            gameData={gameData}
            handleClick={handleClick}
        />
    );
};
