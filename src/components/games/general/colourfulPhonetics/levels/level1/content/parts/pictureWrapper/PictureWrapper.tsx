import React from 'react';
import {
    ColourfulPhonetics_Picture, ColourfulPhonetics_TranscriptionPosition
} from '../../../../../type';
import {UpdateFillColorsT} from '../../../type';
import {Overlay} from './overlay';
import * as Pictures from './pictures';
import styles from './style.scss';

type PictureWrapperP = {
    colorData:string[];
    picture:ColourfulPhonetics_Picture;
    initialColors:string[];
    currentColor:string | null;
    transcriptionPos:ColourfulPhonetics_TranscriptionPosition[];
    updateFillColors:UpdateFillColorsT;
};

export const PictureWrapper = ({
    colorData,
    picture,
    initialColors,
    currentColor, transcriptionPos,
    updateFillColors,
}:PictureWrapperP) => {
    const PictureComponent = Pictures[picture];

    return (
        <div className={styles.pictureWrapper}>
            <div className={styles.pictureComponentContainer}>
                <PictureComponent
                    colorData={colorData}
                    initialColors={initialColors}
                    updateFillColors={updateFillColors}
                />
                <Overlay currentColor={currentColor}
                    transcriptionPos={transcriptionPos}/>
            </div>
        </div>
    );
};
