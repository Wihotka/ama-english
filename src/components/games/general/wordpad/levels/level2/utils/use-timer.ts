import {useEffect} from 'react';

import {clearAllGameTimeoutInterval, setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {useTimerT} from '../type';

export const useTimer:useTimerT = (props) => {
    const {timer, isTimerBegan, defaultTimer, timeForRemoveKey, changeGPDOnline, updateFieldCB, deleteExtraKeysCB} = props;

    useEffect(() => {
        timer === timeForRemoveKey ? deleteExtraKeysCB() : null;

        clearAllGameTimeoutInterval();
        setGameTimeout(() => changeGPDOnline({timer: isTimerBegan ? timer - 1 : defaultTimer}), 100);
    }, [timer, isTimerBegan]);

    useEffect(() => {timer === 0 ? updateFieldCB() : null;}, [timer]);
};