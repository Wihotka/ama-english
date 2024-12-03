import React, {useEffect, useState} from 'react';
import {classNames} from 'js-data-utils';

import styles from './styles.scss';

const cssAnimationDuration = 600; //ms
const animationDuration = cssAnimationDuration * 2; //ms
const animationStopDuration = cssAnimationDuration * 4; //ms

export const Message = ({msg}:{msg:string}) => {
    const [isAnimate, setIsAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimate(isAnimate => !isAnimate);
        }, isAnimate ? animationDuration : animationStopDuration);
    }, [isAnimate]);

    const cn = isAnimate ? classNames(styles.message, styles.animMessage) : styles.message;

    return <p className={cn} style={{animationDuration: `${cssAnimationDuration}ms`}}>{msg}</p>;
};