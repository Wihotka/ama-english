import {random} from 'lodash';

import {setRandomCoordsP} from '../type';

export const setRandomCoords = (props:setRandomCoordsP) => {
    const {gamePlayData, changeGPDOnline, speed} = props;
    const {coordinatesAndDirections} = gamePlayData;
    const {fieldWidth, fieldHeight, featherWidth, featherHeight} = gamePlayData.sizes;

    const differenceX = fieldWidth - featherWidth;
    const differenceY = fieldHeight - featherHeight;
    const horizontalDirections = ['left', 'right'];
    const verticalDirectionS = ['up', 'down'];
    const universalSpeedRatios = [0.2, 0.3, 0.4];

    const getAvailableCoordinates = (difference = 0) =>
        Array(speed * 11)
            .fill(0)
            .map((e, i) =>
                difference
                    ? +(difference - (i * 0.1)).toFixed(2)
                    : +(i * 0.1).toFixed(2));

    const startedAvailableCoordinates = getAvailableCoordinates();

    const availableCoordinatesX = [startedAvailableCoordinates, getAvailableCoordinates(differenceX)];
    const availableCoordinatesY = [startedAvailableCoordinates, getAvailableCoordinates(differenceY)];

    const [maxLeftCoordinate, maxRightCoordinate] = availableCoordinatesX;
    const [maxTopCoordinate, maxBottomCoordinate] = availableCoordinatesY;

    const coordinates:Array<Array<number>> = [];

    for (let i = 0; i < coordinatesAndDirections.length; i++) {
        const coordinate = [
            Math.trunc(random(maxLeftCoordinate[0], maxRightCoordinate[maxRightCoordinate.length - 1])),
            Math.trunc(random(maxTopCoordinate[0], maxBottomCoordinate[maxBottomCoordinate.length - 1]))
        ];

        const check = coordinates.some(coord =>
            (coord[0] + featherWidth / 2 > coordinate[0]) &&
            (coord[0] - featherWidth / 2 < coordinate[0]) &&
            (coord[1] + featherHeight / 2 > coordinate[1]) &&
            (coord[1] - featherHeight / 2 < coordinate[1])
        );

        if (!check) coordinates.push(coordinate);
        else i--;
    }

    const startCoordinates = coordinatesAndDirections.map((el, index) => [
        ...coordinates[index],
        horizontalDirections[random(0, 1)],
        verticalDirectionS[random(0, 1)],
        universalSpeedRatios[random(0, universalSpeedRatios.length - 1)]
    ]);

    changeGPDOnline({
        coordinatesAndDirections: startCoordinates,
        availableCoordinates: [...availableCoordinatesX, ...availableCoordinatesY],
        successPressedIndexes: [],
        errorPressedIndexes: []
    });

    setTimeout(() => changeGPDOnline({isFieldUpdating: false}), 500);
};