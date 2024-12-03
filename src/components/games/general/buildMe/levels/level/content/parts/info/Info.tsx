import React from 'react';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InfoP} from '../../../type';
import {InfoBtn} from '@components/common/game/components';

export const Info = ({gamePlayData, gameData, handleHint, handleVoice}:InfoP) => {
    const {level, isHintHidden, words} = gameData;
    const {
        isHintButtonPressed,
        currentWordIndex,
        isVoiceButtonPressed,
        isFieldUpdate,
    } = gamePlayData;

    const hintButtonClasses = classNames(
        styles.hint,
        isHintHidden ? styles.hiddenHint : ''
    );
    const imgWrapperClasses = classNames(
        styles.imgWrapper,
        level === 1 ? styles.imgWrapperL1 : ''
    );
    const imgClasses = classNames(
        styles.img,
        isFieldUpdate ? styles.hiding : styles.showing
    );
    const interactiveClasses = classNames(
        styles.interactive,
        level === 1 ? styles.interactiveL1 : level === 2 ? styles.interactiveL2 : styles.interactiveL3
    );
    const transcriptionClasses = classNames(
        styles.transcription,
        level === 1 ? styles.transcriptionL1 : level === 2 ? styles.transcriptionL2 : '',
        isFieldUpdate ? styles.hiding : styles.showing
    );
    const voiceButtonClasses = classNames(
        styles.voice,
        level === 1 ? styles.voiceL1 : level === 2 ? styles.voiceL2 : styles.voiceL3,
        isFieldUpdate ? styles.hiding : styles.showing,
    );

    return (
        <div className={styles.wrapper}>

            <InfoBtn
                type={'help'}
                sizeShadow={'small'}
                disabled={isHintButtonPressed}
                classNameBtn={hintButtonClasses}
                isPressed={isHintButtonPressed}
                handler={handleHint}/>

            <div className={styles.done}>
                <div className={imgWrapperClasses}>
                    <img
                        className={imgClasses}
                        src={`${words[currentWordIndex].imageUrls}`}
                        alt={words[currentWordIndex].word}/>
                </div>
                <div className={interactiveClasses}>
                    <p className={transcriptionClasses}>
                        {words[currentWordIndex].transcription}</p>

                    <InfoBtn
                        sizeShadow={level === 3 ? 'big' : 'small'}
                        type={'play'}
                        classNameBtn={voiceButtonClasses}
                        disabled={isVoiceButtonPressed}
                        isPressed={isVoiceButtonPressed}
                        handler={handleVoice}/>

                </div>
            </div>

        </div>
    );
};