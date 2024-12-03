import React from 'react';
import {classNames} from 'js-data-utils';

import styles from './style.scss';

type P = {
    children:any;
    needShake:boolean;
};

export const Shake = ({children, needShake}:P) => {
    const className = classNames(styles.elem, (needShake && styles.elem_shake));

    return (
        <span className={className}>
            {children}
        </span>
    );
};