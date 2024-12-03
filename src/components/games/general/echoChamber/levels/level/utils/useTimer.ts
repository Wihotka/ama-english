import {useEffect} from 'react';

import {clearAllGameTimeoutInterval, setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';

import {useTimerT} from '../type';

export const useTimer:useTimerT = (props) => {
    const {timer, changeGPDOnline} = props;

    useEffect(() => {
        clearAllGameTimeoutInterval();
        setGameTimeout(() => changeGPDOnline({timer: timer - 1}), 1000);
    }, [timer]);

    useEffect(() => {timer === 0 ? changeGPDOnline({isMandatoryTime: false}) : null;}, [timer]);
};