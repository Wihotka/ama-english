import {generateTrajectoryBezier, onActualTime, transformCoordinates} from './';

import {GetTransformStylesT} from './../type';

export const getTransformStyles:GetTransformStylesT = (params) => {
    const {
        variant,
        time,
        timeFly,
        timeToClick,
        actualAttemptsQty,
        fieldSize,
        optionsFieldSize,
        isHidingOption,
    } = params;

    const {flyDelay, isSelect, isCorrect} = variant;

    const {startPositionFly, endPositionFly, coordinatesCentralPoint} = transformCoordinates({
        fieldSize,
        optionsFieldSize,
        option: variant,
    });

    const actualTime = onActualTime({time, actualAttemptsQty, timeToClick, flyDelay, isSelect});

    const {posX, posY} = generateTrajectoryBezier({
        startPositionFly,
        coordinatesCentralPoint,
        endPositionFly,
        time: actualTime
    });

    const actualPosition = {
        transform: `translate(${posX}px, ${-posY}px)`,
        msTransform: `translate(${posX}px, ${-posY}px)`,
        WebkitTransform: `translate(${posX}px, ${-posY}px)`,
        MozTransformOrigin: `translate(${posX}px, ${-posY}px)`
    };

    if (isSelect && !isCorrect) {
        return {
            transition: '1000ms linear',
            opacity: 0,
            transform: `translate(${posX}px, ${500}px)`,
            msTransform: `translate(${posX}px, ${500}px)`,
            WebkitTransform: `translate(${posX}px, ${500}px)`,
            MozTransformOrigin: `translate(${posX}px, ${500}px)`
        };
    }

    if (isHidingOption) {
        return {
            transition: `transform ${timeFly * 80}ms linear, opacity 200ms linear`,
            opacity: 0,
            ...actualPosition
        };
    }

    return time <= 0 ? actualPosition : {transition: `${timeFly * 80}ms linear`, ...actualPosition};
};