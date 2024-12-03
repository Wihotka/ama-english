import React, {CSSProperties, FC, ReactNode} from 'react';
import {classNames} from 'js-data-utils';

import styles from './styles.scss';

type P = {
    item:string | number;
    text:ReactNode;
    disabled:boolean;
    isChecked:boolean;
    type:'rd'| 'cb';
    onClick:(item:P['item']) => void;
};

export const CheckBoxRadioBtn = (p:P) => {
    const {item, disabled, isChecked, type = 'rd', text, onClick} = p;
    const className = classNames(styles.btn, styles[`btn_${type}`], (isChecked && styles.btn_active));

    return (
        <span>
            <button
                value={item}
                disabled={disabled}
                className={styles.btnWrap}
                onClick={() => onClick(item)}>
                <span className={className}>{isChecked && <Icon/>}</span>
                <span className={styles.text}>{text}</span>
            </button>
        </span>);
};

export const Group:FC<{style?:CSSProperties}> = ({children, style}) =>
    <div className={styles.group} style={style}>{children}</div>;

const Icon = () => <svg
    width={13}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M5.415 9.335a2 2 0 0 1-2.82-.01l-2.19-2.19c-.55-.55-.54-1.44.03-1.97.54-.52 1.4-.5 1.92.02l1.65 1.65 6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93Z"
        fill="#E4FAF5"
    />
</svg>;