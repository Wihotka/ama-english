import {classNames} from 'js-data-utils';
import React from 'react';
import {MarkerItemP} from '../../../../../type';
import styles from './style.scss';

export const MarkerDotItem = ({
    color,
    currentColor,
    failedColor,
    changeCurrentColor,
}:MarkerItemP) => {
    const isSelected = color === currentColor;
    const isWrong = color === failedColor;
    const markerClassName = classNames(
        styles.markerDot,
        isSelected ? '' : styles.markerBorder,
        isWrong ? styles.markerShadow : ''
    );

    return (
        <div
            onClick={() => changeCurrentColor(color)}
            className={markerClassName}
            style={{backgroundColor: color}}/>
    );
};
