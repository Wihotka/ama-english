import React, {useMemo} from 'react';
import styled from 'styled-components';

import {classNames} from 'js-data-utils';

import styles from './style.scss';

import {TimerP} from '../../../type';

const TimerValue = styled.span`
  color: ${props => props.theme.colors.color4};
`;

export const Timer = (props:TimerP) => useMemo(() => {
    const {timer, startTimer} = props;

    const currentPercent = timer / startTimer * 100;
    const timeLineColor = currentPercent > 66 ? 'green' : currentPercent > 33 ? 'yellow' : 'red';
    const renderedTimer = Math.ceil(timer / 10);
    const wholeMinutes = Math.floor(renderedTimer / 60);
    const lostSeconds = renderedTimer - (wholeMinutes * 60);
    const presentSeconds = lostSeconds < 10 ? 0 + String(lostSeconds) : lostSeconds;

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
                {renderedTimer >= 60 ? `0${wholeMinutes}:${presentSeconds}` : `00:${presentSeconds}`}</TimerValue>
            <div className={styles.outerLine}>
                <div className={getTimeLineClasses()} style={getTimeLineWidth()}> </div>
            </div>
        </div>
    );
}, [props.timer]);