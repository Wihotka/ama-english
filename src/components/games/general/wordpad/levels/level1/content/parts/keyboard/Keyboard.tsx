import React, {Fragment} from 'react';

import {GameBtn} from '@components/common/game/components/game-btn';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {KeyboardP} from '../../../type';

export const Keyboard = ({keyboard, pressedKey, handleKey}:KeyboardP) => {
    const getKeyClasses = (letter:string):string =>
        classNames(
            styles.key,
            pressedKey === letter ? 'pressed' : ''
        );

    const getBackspaceClasses = ():string =>
        classNames(
            styles.key,
            styles.keyBackspace,
            pressedKey === 'Backspace' ? 'pressed' : ''
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

            <GameBtn
                className={getBackspaceClasses()}
                onClick={() => handleKey('Backspace')}> </GameBtn>
        </div>
    );
};