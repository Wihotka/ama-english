import React, {RefObject, useRef} from 'react';
import {classNames} from 'js-data-utils';

import {StyleBoxShadow} from './StyleBoxShadow';

import styles from './styles.scss';

type InfoBtnP = {
    type:'play' | 'slow' | 'help';
    sizeShadow:'small' | 'big',
    isPressed:boolean | 'default',

    handler?:Function;
    disabled?:boolean;
    classNameBtn:string;
};

export const InfoBtn = (props:InfoBtnP) => {
    const {type, sizeShadow, classNameBtn, handler, disabled, isPressed} = props;

    const isPlayButton = type === 'play' || type === 'slow';

    const getBtnClasses = () =>
        classNames(
            isPlayButton ? styles.playBtn : styles.helpBtn,
            isPressed === 'default' ? 'default' : isPressed ? 'pressed' : '',
            disabled ? styles.disabled : '',
            classNameBtn
        );

    const markClasses = classNames(
        styles.mark,
        type === 'slow' ? styles.mark__slow : ''
    );

    const handleClick = () => {
        (disabled !== null && handler) && handler();
        btnRef.current?.blur();
    };

    const btnRef:RefObject<HTMLButtonElement> = useRef(null);

    return (
        <StyleBoxShadow
            className={getBtnClasses()}
            onClick={handleClick}
            ref={btnRef}
            size={sizeShadow}>
            {isPlayButton && <span className={markClasses}/> || 'Help'}
        </StyleBoxShadow>
    );
};
