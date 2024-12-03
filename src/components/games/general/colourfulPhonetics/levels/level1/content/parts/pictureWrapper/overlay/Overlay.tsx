import React from 'react';
import {ColourfulPhonetics_TranscriptionPosition} from '../../../../../../type';
import {Cursor} from './cursor';
import styles from './style.scss';

type OverlayP = {
    currentColor:string | null;
    transcriptionPos:ColourfulPhonetics_TranscriptionPosition[];
};

export const Overlay = ({currentColor, transcriptionPos}:OverlayP) => {
    const mql = matchMedia('(pointer:fine)');
    const {matches: showCursor} = mql;

    return (
        <div className={styles.overlay}>
            <div className={styles.transcriptionsContainer}>
                {transcriptionPos.map(({pos, text}) =>
                    pos.map(({left, top}, i) => {
                        const style:React.CSSProperties = {
                            left: `${left}%`,
                            top: `${top}%`,
                        };
                        const key = `${i}-${text}`;
    
                        return (
                            <div
                                className={styles.text}
                                style={style}
                                key={key}
                            >
                                {`[${text}]`}
                            </div>
                        );
                    })
                )}
            </div>
            {currentColor && showCursor && <Cursor currentColor={currentColor} />}
        </div>
    );
}; 
