import React from 'react';

import {Btn} from '@components/common/elements';
import {Interactive} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {
        mode,
        sentences,
        handlePlayCB,
        isSoundPlaying,
        handleSwitchCB,
        isMandatoryTime,
        handleDetailsCB,
        isDetailsShowed,
        isTheLastSentence,
        currentSentenceIndex,
        isFieldUpdated
    }  = props;

    return (
        <div className={styles.gameWrap}>
            <Interactive
                mode={mode}
                sentences={sentences}
                handlePlayCB={handlePlayCB}
                isSoundPlaying={isSoundPlaying}
                handleDetailsCB={handleDetailsCB}
                isDetailsShowed={isDetailsShowed}
                currentSentenceIndex={currentSentenceIndex}
                isFieldUpdated={isFieldUpdated}/>
            <Btn
                type={'primary'}
                handler={handleSwitchCB}
                disabled={isMandatoryTime}
                className={styles.checkBtn}
                textCode={isTheLastSentence ? 'finish' : 'next'}/>
        </div>
    );
};
