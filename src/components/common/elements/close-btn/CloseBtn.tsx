import React, {CSSProperties} from 'react';
import {classNames} from 'js-data-utils';

import styles from './style.scss';

type P = {
    action:Function;
    className?:string;
    color?:CSSProperties['color'];
};

export const CloseBtn = ({action, className = '', color}:P) =>
    <button className={classNames(styles.close, className)} onClick={() => action()} style={{color}} />;