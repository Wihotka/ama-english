import React, {CSSProperties, FC, MouseEventHandler} from 'react';
import {classNames} from 'js-data-utils';

import {LocalizedText} from '@components/common/localized-text';

import styles from './style.scss';
import {ButtonsLang} from '@custom-types';

export type BtnType = 'normal' | 'primary' | 'game-route';

type P =  {
    handler?:Function;
    style?:CSSProperties;
    value?:string;
    disabled?:boolean;
    className?:string;
    type?:BtnType;
    size?:'normal' | 'small';
    isInterfaceButton?:boolean;
    isRound?:boolean;
    textCode?:keyof ButtonsLang;
};

export const Btn:FC<P> = (p) => {
    const {style, value, disabled = false, className = '', children, size = 'normal', type = 'normal', textCode, isRound = false, handler} = p;

    const onClick:MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;

        handler && handler(e);
    };

    const btnClassName = classNames(styles.btn, styles[`btn_${type}`], styles[`btn_size_${size}`], className, (isRound && styles.btn_round));

    return <button
        value={value}
        disabled={disabled}
        className={btnClassName}
        style={{...style}}
        onClick={onClick}>
        {textCode && <LocalizedText name={textCode} path={'buttons/translation'} useSuspense={false} />}
        {children}
    </button>;
};

// const