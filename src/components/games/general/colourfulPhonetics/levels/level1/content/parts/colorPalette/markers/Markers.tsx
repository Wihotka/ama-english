import {InfoBtn} from '@components/common/game/components';
import React from 'react';
import {ColorPaletteP} from '../../../../type';
import {MarkerItem} from './markerItem';
import styles from './style.scss';

export const Markers = ({colorPalette,
    currentColor,
    isSoundPlaying,
    pressedBtnIndex,
    failedColor,
    changeCurrentColor,
    playSound,}:ColorPaletteP) => (
    <div className={styles.markers}>
        {colorPalette.map(({color, transcription}, i) => (
            <div className={styles.markerContainer} key={color}>
                <div className={styles.btnContainer}>
                    <InfoBtn
                        classNameBtn={styles.playBtn}
                        isPressed={isSoundPlaying && i === pressedBtnIndex}
                        sizeShadow="small"
                        type="play"
                        handler={() => playSound(transcription, color, i)}
                    />
                </div>
                <MarkerItem
                    color={color}
                    currentColor={currentColor}
                    failedColor={failedColor}
                    changeCurrentColor={changeCurrentColor}
                />
            </div>
        ))}
    </div>
);
