import {OnTrajectoryBezierT} from './../type';

export const generateTrajectoryBezier:OnTrajectoryBezierT = (params) => {
    const {startPositionFly, endPositionFly, coordinatesCentralPoint, time} = params;

    //Возвращает координаты остановки после анимации движения
    if (time >= 1) {
        return {
            posX: endPositionFly.X,
            posY: endPositionFly.Y
        };
    }

    //Возвращает координаты до начала анимации движения
    if (time <= 0) {
        return {
            posX: startPositionFly.X,
            posY: startPositionFly.Y
        };
    }

    //Формула «Бизье» по 3 точкам
    const posX = Math.pow((1 - time), 2) * startPositionFly.X
        + 2 * Math.pow((1 - time), 2) * time * coordinatesCentralPoint.X
        + Math.pow(time, 2) * endPositionFly.X;

    const posY = Math.pow((1 - time), 2) * startPositionFly.Y
        + 2 * Math.pow((1 - time), 2) * time * coordinatesCentralPoint.Y
        + Math.pow(time, 2) * endPositionFly.Y;

    return {
        posX,
        posY
    };
};