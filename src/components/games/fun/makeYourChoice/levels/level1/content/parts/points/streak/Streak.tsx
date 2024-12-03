import {classNames} from 'js-data-utils';
import React from 'react';
import styled from 'styled-components';
import styles from './style.scss';

const CheckPoint = styled.div<{transparent:boolean, check:boolean}>`
    border: ${({theme}) => `2px solid ${theme.colors.color4}`};
    background: ${({theme, check}) => check ? theme.colors.color4 : '#fff'};

    &::after {
        opacity: ${({transparent}) => transparent && '0.4'};
    }
`;

type StreakP = {
    streak:number;
};

export const Streak = ({streak}:StreakP) => {
    const checkPointClassName = classNames(styles.checkPoint);
    const checkPointStyle = (i:number):React.CSSProperties =>
        i < streak ? {borderColor: 'transparent'} : i === streak ? {} : {opacity: '0.4'};

    return (
        <div className={styles.streak}>
            {new Array(5).fill('').map((_, i) => (
                <CheckPoint
                    className={checkPointClassName}
                    style={checkPointStyle(i)}
                    key={i}
                    transparent={i === streak}
                    check={i < streak}
                >
                    {i < streak && (
                        <img
                            src={require('/assets/img/sections/fun/makeYourChoice/check.svg')}
                            alt=""
                        />
                    )}
                </CheckPoint>
            ))}
        </div>
    );
};
