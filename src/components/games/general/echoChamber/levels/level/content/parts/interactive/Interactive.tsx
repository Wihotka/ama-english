import React from 'react';
import {classNames} from 'js-data-utils';

import {Buttons, Wave, Details} from './parts';
import {InteractiveP} from './../../../type';

import styles from './style.scss';

export const Interactive = (props:InteractiveP) => {
    const {
        mode,
        sentences,
        handlePlayCB,
        isSoundPlaying,
        handleDetailsCB,
        isDetailsShowed,
        currentSentenceIndex,
        isFieldUpdated
    } = props;

    return (
        <div className={classNames(styles.wrapper, isFieldUpdated && styles.nextSentence)}>
            <div className={styles.wrapper__top}>
                <Buttons
                    mode={mode}
                    handlePlayCB={handlePlayCB}
                    currentSentenceIndex={currentSentenceIndex}/>
                <Wave
                    mode={mode}
                    isSoundPlaying={isSoundPlaying}/>
            </div>
            <Details
                sentences={sentences}
                handleDetailsCB={handleDetailsCB}
                isDetailsShowed={isDetailsShowed}
                currentSentenceIndex={currentSentenceIndex}/>
        </div>
    );
};