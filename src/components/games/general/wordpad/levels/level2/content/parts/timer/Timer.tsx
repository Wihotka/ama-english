import React, {useMemo} from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {TimerP} from '../../../type';

const TimerValue = styled.span`
  color: ${props => props.theme.colors.color4};
`;

export const Timer = ({timer, startTimer}:TimerP) => useMemo(() => {
    const currentPercent = timer / startTimer * 100;
    const timeLineColor = currentPercent > 66 ? 'green' : currentPercent > 33 ? 'yellow' : 'red';
    const renderedTimer = Math.ceil(timer / 10);

    const getTimeLineWidth = () => ({width: `${currentPercent}%`});
    const getTimeLineClasses = () =>
        classNames(
            styles.innerLine,
            styles[`innerLine_${timeLineColor}`]
        );

    const getTimeValueClasses = () =>
        classNames(
            styles.value,
            styles[`value_${timeLineColor}`]
        );

    return (
        <div className={styles.wrapper}>
            <TimerValue className={getTimeValueClasses()}>
                00:{renderedTimer < 10 ? 0 + String(renderedTimer) : renderedTimer}</TimerValue>
            <div className={styles.outerLine}>
                <div className={getTimeLineClasses()} style={getTimeLineWidth()}> </div>
            </div>
        </div>
    );
}, [timer]);