import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {
    ColourfulPhoneticsT,
    ColourfulPhonetics_GamePlayData
} from '../../type';
import {Content} from './content';
import {
    ChangeCurrectColorT, PlaySoundT, UpdateFillColorsT
} from './type';

export const Body = ({
    game,
    changeGPDOnline,
    speakTexts,
    initFinishPlaying,
}:ColourfulPhoneticsT) => {
    const {gameData, gamePlayData} = game;
    const {correctColors, colorScheme, colorAreas} = gameData;
    const {
        fillColors,
        currentColor,
        isSoundPlaying,
        correctAnswersQty,
        wrongAnswersQty,
    } = gamePlayData;

    const changeCurrentColor:ChangeCurrectColorT = (newColor) => {
        changeGPDOnline<ColourfulPhonetics_GamePlayData>({
            currentColor: newColor,
        });
    };

    const updateFillColors:UpdateFillColorsT = (index) => {
        if (!currentColor || fillColors[index] !== '#fff') return;

        const n = correctColors[index];
        const isCorrect = colorScheme[n] === currentColor;

        if (isCorrect) {
            const newFillColors = [...fillColors];

            if (colorAreas) {
                colorAreas[index].forEach((v) => {
                    newFillColors[v] = currentColor;
                });
            } else {
                newFillColors[index] = currentColor;
            }

            changeGPDOnline<ColourfulPhonetics_GamePlayData>({
                fillColors: newFillColors,
                correctAnswersQty: correctAnswersQty + 1,
            });

            if (!newFillColors.includes('#fff')) {
                setGameTimeout(() => {
                    initFinishPlaying();
                }, 1000);
            }
        } else {
            changeGPDOnline<ColourfulPhonetics_GamePlayData>({
                wrongAnswersQty: wrongAnswersQty + 1,
                currentColor: null,
                failedColor: currentColor,
            });

            setGameTimeout(() => {
                changeGPDOnline<ColourfulPhonetics_GamePlayData>({
                    failedColor: null,
                });
            }, 1000);
        }
    };

    const playSound:PlaySoundT = (transcription, color, index) => {
        if (isSoundPlaying) return;

        changeGPDOnline<ColourfulPhonetics_GamePlayData>({
            isSoundPlaying: true,
            pressedBtnIndex: index,
            currentColor: color,
        });

        speakTexts({
            text: transcription,
            onFinishPlaying: () => {
                changeGPDOnline<ColourfulPhonetics_GamePlayData>({
                    isSoundPlaying: false,
                    pressedBtnIndex: -1,
                });
            },
        });
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            changeCurrentColor={changeCurrentColor}
            updateFillColors={updateFillColors}
            playSound={playSound}
        />
    );
};
