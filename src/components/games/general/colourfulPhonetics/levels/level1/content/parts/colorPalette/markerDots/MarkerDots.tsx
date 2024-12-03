import {InfoBtn} from '@components/common/game/components';
import React from 'react';
import {ColorPaletteP} from '../../../../type';
import {MarkerDotItem} from './markerDotItem';
import styles from './style.scss';

export const MarkerDots = ({colorPalette,
    currentColor,
    isSoundPlaying,
    pressedBtnIndex,
    failedColor,
    changeCurrentColor,
    playSound,}:ColorPaletteP) => (
    <div className={styles.markerDots}>
        {colorPalette.map(({color, transcription}, i) => (
            <div className={styles.markerDotContainer} key={color}>
                <MarkerDotItem
                    color={color}
                    currentColor={currentColor}
                    failedColor={failedColor}
                    changeCurrentColor={changeCurrentColor}
                />
                <div className={styles.btnContainer}>
                    <InfoBtn
                        classNameBtn={styles.playBtn}
                        isPressed={
                            isSoundPlaying && i === pressedBtnIndex
                        }
                        sizeShadow="small"
                        type="play"
                        handler={() =>
                            playSound(transcription, color, i)
                        }
                    />
                </div>
            </div>
        ))}
    </div>
);
