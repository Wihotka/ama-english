import React, {useMemo} from 'react';

import {InfoBtn} from '@components/common/game/components/info-btn';

import styles from './style.scss';

import {InteractiveP} from '../../../type';

export const Interactive = (props:InteractiveP) => useMemo(() => {
    const {isPlayButtonPressed, handlePlay} = props;

    return (
        <div className={styles.interactive}>
            <InfoBtn
                sizeShadow={'big'}
                type={'play'}
                classNameBtn={styles.voice}
                isPressed={isPlayButtonPressed}
                handler={handlePlay}
                disabled={isPlayButtonPressed}/>
        </div>
    );
}, [props.isPlayButtonPressed, props.currentWordIndex]);