import React, {useState, useEffect, memo} from 'react';
import {getTimeStr} from 'js-data-utils';
import styled from 'styled-components';

import styles from './styles.scss';

type MainTimer = {
    time:number|undefined;
    delay?:number;
    finishGame:Function;
};

export const MainTimer = ({time, delay, finishGame}:MainTimer) => {
    const isCountdown = !!time;
    const initialTime = isCountdown ? time : 0;
    const [gameTime, setGameTime] = useState<number>(initialTime);
    const [gameDelay, setGameDelay] = useState<number|undefined>(delay);

    let interval:NodeJS.Timeout;

    useEffect(() => {
        if (gameTime < 0) setGameTime(0);

        interval = setTimeout(() => {
            const nextTime = gameDelay && gameDelay > 0
                ? gameTime
                : isCountdown ? gameTime - 1 : gameTime + 1;

            if (gameDelay && gameDelay > 0) setGameDelay(prev => prev ? prev -= 1 : undefined);

            if (isCountdown && nextTime === 0) {
                finishGame();
                
                return;
            }

            setGameTime(nextTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [gameTime, gameDelay]);

    const timeStr = getTimeStr(gameTime);

    return (
        <div className={styles.timerWrap}>
            <ClockImg/>
            {timeStr}
        </div>
    );
};

const ClockImgBlock = styled.div`
    border-color: #88B8FF!important;
    box-shadow: 0px 0px 8px 0px rgba(6, 105, 133, 0.80);
`;

const Svg = styled.svg`
    stroke: #4E96FF;
    filter: drop-shadow(0px 2px 4px #88B8FF)
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
