import React, {memo, useEffect, useState} from 'react';
import {getTimeStr} from 'js-data-utils';
import styled from 'styled-components';

import {Block} from '../block';
import styles from './styles.scss';

type P = {
    isNeedHideTimer:boolean;
    gameTime:number;
    onFinish?:() => void;
};

export const Clock = ({onFinish, gameTime, isNeedHideTimer}:P) => {
    const isCountdown = gameTime > 0;
    const initialTime = isCountdown ? gameTime : 0;
    const [time, setTime] = useState<number>(initialTime);

    let interval:NodeJS.Timeout;

    useEffect(() => {
        if (isCountdown && time < 0) return () => {
            clearInterval(interval);
        };

        interval = setTimeout(() => {
            const nextTime = isCountdown
                ? time - 1
                : time + 1;

            if (isCountdown && nextTime === 0) {
                if (typeof onFinish === 'function') {
                    onFinish();
                }

                return;
            }

            setTime(nextTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    const timeStr = getTimeStr(time);
    const style = isNeedHideTimer ? {opacity: 0} : {};

    return (
        <Block type={'time'} style={style}>
            <ClockImg/>
            <>{timeStr}</>
        </Block>
    );
};

const ClockImgBlock = styled.div`
    border-color: ${props => props.theme.colors.color6}!important;
    box-shadow: ${props => `0 0 8px ${props.theme.colors.color3 + 'CC'}, inset -2px -2px 4px ${props.theme.colors.color3 + '3D'}`};
`;

const Svg = styled.svg`
    stroke: ${props => props.theme.colors.color5};
    filter: drop-shadow(0px 2px 4px ${props => props.theme.colors.color6})
`;

const ClockImg = memo(() => <ClockImgBlock className={styles.clockImg}><SvgComponent/></ClockImgBlock>);

const SvgComponent = () => (
    <Svg
        width={9}
        height={23}
        className={styles.arrow}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            opacity={0.72}
            d="M7.806 21.805 1 15V1.389"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
