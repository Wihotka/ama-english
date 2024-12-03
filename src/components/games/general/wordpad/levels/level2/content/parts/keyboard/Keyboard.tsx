import React, {Fragment, useMemo} from 'react';

import {GameBtn} from '@components/common/game/components/game-btn';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {KeyboardP} from '../../../type';

export const Keyboard = (props:KeyboardP) => useMemo(() => {
    const {keyboard, pressedKey, handleKey, removedKeys} = props;

    const getKeyClasses = (letter:string):string =>
        classNames(
            styles.key,
            pressedKey === letter ? 'pressed' : '',
            removedKeys.includes(letter) ? styles.keyHidden : ''
        );

    return (
        <div className={styles.keyboard}>
            {keyboard &&
                keyboard.map((letter, index) => {
                    const brakePoint = (index === 10 || index === 19) && (<span className={styles.brake}/>);

                    return (
                        <Fragment key={index}>
                            {brakePoint}
                            <GameBtn
                                className={getKeyClasses(letter)}
                                onClick={() => handleKey(`Key${letter}`)}>{letter}</GameBtn>
                        </Fragment>
                    );
                })
            }
        </div>
    );
}, [props.pressedKey, props.removedKeys, props.isTimerBegan]);