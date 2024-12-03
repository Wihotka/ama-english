import React from 'react';
import {
    ColourfulPhonetics_GameData,
    ColourfulPhonetics_GamePlayData,
} from '../../../type';
import {
    ChangeCurrectColorT,
    PlaySoundT,
    UpdateFillColorsT,
} from '../type';
import {ColorPalette, PictureWrapper} from './parts';
import styles from './style.scss';

type ContentP = {
    gameData:ColourfulPhonetics_GameData;
    gamePlayData:ColourfulPhonetics_GamePlayData;
    changeCurrentColor:ChangeCurrectColorT;
    updateFillColors:UpdateFillColorsT;
    playSound:PlaySoundT;
};

export const Content = ({
    gameData,
    gamePlayData,
    changeCurrentColor,
    updateFillColors,
    playSound,
}:ContentP) => {
    const {colorPalette, transcriptionPos, picture, initialColors} = gameData;
    const {
        fillColors,
        currentColor,
        isSoundPlaying,
        pressedBtnIndex,
        failedColor,
    } = gamePlayData;

    return (
        <div className={styles.contentContainer}>
            <PictureWrapper
                colorData={fillColors}
                picture={picture}
                initialColors={initialColors}
                currentColor={currentColor}
                transcriptionPos={transcriptionPos}
                updateFillColors={updateFillColors}
            />
            <ColorPalette
                colorPalette={colorPalette}
                currentColor={currentColor}
                isSoundPlaying={isSoundPlaying}
                pressedBtnIndex={pressedBtnIndex}
                failedColor={failedColor}
                changeCurrentColor={changeCurrentColor}
                playSound={playSound}
            />
        </div>
    );
};
