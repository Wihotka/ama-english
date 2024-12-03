import {useEffect} from 'react';

import {timeResolver} from '../../../config';

import {useTimerP} from '../type';

export const useTimer = (props:useTimerP) => {
    const {userTime, initFinishPlaying, mode, changeGPDOnline} = props;

    useEffect(() => {
        userTime === timeResolver[mode][2] ? initFinishPlaying() : null;

        // clearInterval();
        setTimeout(() => changeGPDOnline({userTime: userTime + 1}), 1000);
    }, [userTime]);
};