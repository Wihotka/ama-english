import React, {useMemo} from 'react';
import {classNames} from 'js-data-utils';

import {InfoBtn} from '@components/common/game/components/info-btn';

import styles from './style.scss';

import {InteractiveP} from '../../../type';

export const Interactive = (props:InteractiveP) => useMemo (() => {
    const {hint, isHintButtonPressed, isPlayButtonPressed, handleHint, handlePlay} = props;

    return (
        <div className={styles.interactive}>
            <InfoBtn
                type={'play'}
                sizeShadow={'big'}
                handler={handlePlay}
                classNameBtn={styles.voice}
                disabled={isPlayButtonPressed}
                isPressed={isPlayButtonPressed}/>
            {!!hint &&
                <InfoBtn
                    type={'help'}
                    sizeShadow={'small'}
                    handler={handleHint}
                    classNameBtn={classNames(styles.hintBtn, isHintButtonPressed && styles.hintBtnActive)}
                    disabled={isHintButtonPressed}
                    isPressed={isHintButtonPressed}/>
            }
        </div>
    );
}, [props.isPlayButtonPressed, props.isHintButtonPressed, props.currentWordIndex]);