import React, {useEffect, useState} from 'react';
import {classNames} from 'js-data-utils';
import {LocalizedText} from '@components/common';
import styles from './styles.scss';

export type P = {
    name:string;
    avatar:string;
    score:number;
    gameTime:number;
    gameDelay?:number;
    stepBy:string;
    rivalName:string;
    isOnline:boolean;
    isFirstPlayer:boolean;
    switchPlayer:() => void;
};

export const SidePanel = (props:P) => {
    const {name, avatar, score, gameTime, gameDelay, stepBy, rivalName, isOnline, isFirstPlayer, switchPlayer} = props;
    // обр отсчет (оффлайн режим) или отсчет вперед (онлайн режим)
    const isCountdown = gameTime > 0;
    const initialTime = isCountdown ? gameTime : 0;
    const isActive = name === stepBy;
    const SWITCH_TIME = 2000;

    const [time, setTime] = useState<number>(initialTime);
    const [delay, setDelay] = useState<number|undefined>(gameDelay);
    const [bonusTime, setBonusTime] = useState<number>(5);
    const [isSwitching, setIsSwitching] = useState<boolean>(false);

    let interval:NodeJS.Timeout;

    useEffect(() => {
        if (time < 0 && !isOnline) {
            setIsSwitching(true);
            setBonusTime(5);

            setTimeout(() => {
                setTime(gameTime);
                switchPlayer();
                setIsSwitching(false);
            }, SWITCH_TIME);
        }

        if (isCountdown && time < 0) return () => {
            clearInterval(interval);
        };

        if (isActive && !isOnline) {
            interval = setTimeout(() => {
                const nextTime = delay && delay > 0
                    ? time
                    : isCountdown ? time - 1 : time + 1;
                
                if (delay && delay > 0) setDelay(prev => prev ? prev -= 1 : undefined);
    
                setTime(nextTime);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [time, delay, stepBy]);

    useEffect(() => {
        if (score && !isOnline) {
            time >= (initialTime - bonusTime)
                ? setTime(initialTime)
                : setTime(prev => prev += bonusTime);

            bonusTime <= 1
                ? setBonusTime(1)
                : setBonusTime(prev => prev -= 2);
        }
    }, [score]);

    return (
        <div className={classNames(
            styles.sidePanel,
            isFirstPlayer ? styles.sidePanelFirst : styles.sidePanelSecond,
            !isActive && styles.sidePanelDisabled
        )}>
            <div className={classNames(styles.switcher, isSwitching && styles.switcherActive)}>
                <div className={styles.switcherBackground}/>
                <span><LocalizedText path={'arena/translation'} name={'stepBy'}/> {rivalName}</span>
            </div>
            <div className={classNames(styles.playerWrap, isFirstPlayer ? styles.playerWrapFirst : styles.playerWrapSecond)}>
                <img src={require(`_assets/img/sections/arena/avatars/${avatar}.png`)} alt={'avatar'}/>
                <h2 className={styles.name}>{name}</h2>
            </div>
            <div className={classNames(styles.timeWrap, isFirstPlayer ? styles.timeWrapFirst : styles.timeWrapSecond)}>
                {!isOnline && <span>{time >= 0 ? time : 0} <LocalizedText path={'arena/translation'} name={'sec'}/></span>}
            </div>
            <div className={styles.scoreWrap}>
                <span className={styles.caption}><LocalizedText path={'arena/translation'} name={'score'}/>:</span>
                <span className={styles.score}>{score}</span>
            </div>
        </div>
    );
};