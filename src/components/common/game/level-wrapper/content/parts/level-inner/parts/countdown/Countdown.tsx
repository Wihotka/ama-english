import React, {useEffect, useState} from 'react';

import styles from './style.scss';
// import {classNames} from 'js-data-utils';

type Props = {
    finishCountdown:boolean;
    startCountdown:boolean;
    hideCountdown:Function;
};

const countdownTime = 3;
const rounds = [];

for (let i = 0; i < countdownTime; i++)
    rounds.push(i);

export const Countdown = (p:Props) => {
    const {hideCountdown} = p;
    const [number, setNumber] = useState(countdownTime);
    // const [isRunHiding, toggleIsRunHiding] = useState(false);
    // const [countdownCN, setCountdownCN] = useState(styles.countdown);
    let timeout:NodeJS.Timeout | null = null;

    useEffect(() => {
        if (number > 0) {
            runTimeout();
        } else {
            // toggleIsRunHiding(true);
            hideCountdown();
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    },[number]);

    // useEffect(() => {
    //     if (isRunHiding) {
    //         setCountdownCN(classNames(countdownCN, styles.countdown_hidden));
    //
    //         setTimeout(() => {
    //             hideCountdown();
    //         }, 500);
    //     }
    // }, [isRunHiding]);

    const runTimeout = () => {
        timeout = setTimeout(() => {
            setNumber(number - 1);
        }, 1000);
    };

    return (
        <div className={styles.countdown}>
            <div className={styles.countdown__inner}>
                {number}
            </div>
        </div>
    );
};
