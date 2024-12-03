import React, {useMemo} from 'react';
import styled from 'styled-components';

import {InfoBtn} from '@components/common/game/components';
import {LocalizedText} from '@components/common';

import styles from './style.scss';

import {ButtonsP, soundMode} from './../../../../../type';

const Description = styled.p`
  color: ${props => [props.theme.colors.color1]}
`;

export const Buttons = (props:ButtonsP) => useMemo(() => {
    const {mode, handlePlayCB} = props;

    return (
        <div className={styles.wrapper}>
            <div>
                <InfoBtn
                    type={'play'}
                    sizeShadow={'big'}
                    disabled={mode !== soundMode.empty}
                    classNameBtn={styles.playBtn__big}
                    isPressed={mode === soundMode.normal}
                    handler={() => handlePlayCB(soundMode.normal)}/>
                <Description className={styles.description}>
                    <LocalizedText
                        useSuspense={false}
                        name={'normalPlay'}
                        path={'games/general/echoChamber/static/translation'}/></Description>
            </div>
            <div>
                <InfoBtn
                    type={'slow'}
                    sizeShadow={'small'}
                    disabled={mode !== soundMode.empty}
                    classNameBtn={styles.playBtn__small}
                    isPressed={mode === soundMode.slowly}
                    handler={() => handlePlayCB(soundMode.slowly)}/>
                <Description className={styles.description}>
                    <LocalizedText
                        useSuspense={false}
                        name={'slowPlay'}
                        path={'games/general/echoChamber/static/translation'}/></Description>
            </div>
        </div>
    );

}, [props.currentSentenceIndex, props.mode]);
