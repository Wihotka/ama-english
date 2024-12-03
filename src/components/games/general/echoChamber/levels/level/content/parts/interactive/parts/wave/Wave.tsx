import React, {useMemo} from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {WaveP} from './../../../../../type';

const SoundLine = styled.span`
  background-color: ${props => props.theme.colors.color4};
`;

export const Wave = (props:WaveP) => useMemo(() => {
    const {mode, isSoundPlaying} = props;

    const soundWave = [];

    const getSoundLineClasses = () =>
        classNames(
            styles.soundLine,
            isSoundPlaying
                ? mode === 'normal'
                    ? styles.soundLine__activeNormal
                    : styles.soundLine__activeSlow
                : ''
        );

    for (let i = 0; i < 28; i++){
        const offset = i / 28 * 100 * (Math.random() / 2);

        const soundLine = <SoundLine key={i} style={{animationDelay: `-${offset}s`}} className={getSoundLineClasses()} />;

        soundWave.push(soundLine);
    }

    return (
        <div className={styles.wrapper}>
            {soundWave.map(soundLine => soundLine)}
        </div>
    );
}, [props.isSoundPlaying]);