import {OnActualTimeT} from './../type';

export const onActualTime:OnActualTimeT = (params) => {
    const {time, actualAttemptsQty, flyDelay, timeToClick, isSelect} = params;

    return !isSelect || actualAttemptsQty >= 0
        ? +(time - flyDelay).toFixed(2)
        : +(timeToClick - flyDelay).toFixed(2);
};