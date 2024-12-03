import React, {useMemo} from 'react';
import styled from 'styled-components';

import {InfoBtn} from '@components/common/game/components/info-btn';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {InteractiveP} from '../../../type';

const Transcription = styled.p`
  color: #7141B7;
`;

export const Interactive = (props:InteractiveP) => useMemo (() => {
    const {level, words, isFieldUpdated, isPlayButtonPressed, currentWordIndex,handlePlay} = props;

    const getTranscriptionClasses = () =>
        classNames(
            styles.transcription,
            isFieldUpdated ? styles.transcription__update : ''
        );

    return (
        <div className={styles.interactive}>
            <Transcription className={getTranscriptionClasses()}>{words[currentWordIndex].transcription}</Transcription>
            {level === 1 &&
                <InfoBtn
                    sizeShadow={'small'}
                    type={'play'}
                    classNameBtn={styles.voice}
                    isPressed={isPlayButtonPressed}
                    handler={handlePlay}/>
            }
        </div>
    );
}, [props.isPlayButtonPressed, props.currentWordIndex, props.isFieldUpdated]);