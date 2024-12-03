import React from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InfoP} from '../../../type';
import {InfoBtn} from '@components/common/game/components';

const Transcription = styled.p`
  color: #9066C6
`;

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
    const interactiveClasses = classNames(
        styles.interactive,
        level === 1 ? styles.interactiveL1 : styles.interactiveL2
    );
    const transcriptionClasses = classNames(
        styles.transcription,
        level === 1 ? styles.transcriptionL1 : '',
        isFieldUpdate ? styles.hiding : styles.showing
    );
    const voiceButtonClasses = classNames(
        styles.voice,
        level === 1 ? styles.voiceL1 : styles.voiceL2,
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
                <div className={interactiveClasses}>
                    <Transcription
                        className={transcriptionClasses}>
                        {words[currentWordIndex].transcription}</Transcription>

                    <InfoBtn
                        sizeShadow={level === 2 ? 'big' : 'small'}
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