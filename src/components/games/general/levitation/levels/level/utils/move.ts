import {moveP} from '../type';

export const move = (props:moveP) => {
    const {speed, coordinatesAndDirections, availableCoordinates, changeGPDOnline} = props;

    const newCoordinatesAndDirections = coordinatesAndDirections.map((current:Array<any>) => {
        const [maxLeftCoordinate, maxRightCoordinate, maxTopCoordinate, maxBottomCoordinate] = availableCoordinates;
        const newCoordinatesAndDirections = [];
        const [
            currentCoordinateX,
            currentCoordinateY,
            currentHorizontalDirection,
            currentVerticalDirection,
            universalSpeedRatio
        ] = current;

        currentHorizontalDirection === 'right'
            ? newCoordinatesAndDirections.push(+(currentCoordinateX + speed * universalSpeedRatio).toFixed(1))
            : newCoordinatesAndDirections.push(+(currentCoordinateX - speed * universalSpeedRatio).toFixed(1));

        currentVerticalDirection === 'up'
            ? newCoordinatesAndDirections.push(+(currentCoordinateY - speed * universalSpeedRatio).toFixed(1))
            : newCoordinatesAndDirections.push(+(currentCoordinateY + speed * universalSpeedRatio).toFixed(1));

        currentHorizontalDirection === 'left'
            ? maxLeftCoordinate.includes(currentCoordinateX)
                ? newCoordinatesAndDirections.push('right') : newCoordinatesAndDirections.push('left')
            : maxRightCoordinate.includes(currentCoordinateX)
                ? newCoordinatesAndDirections.push('left') : newCoordinatesAndDirections.push('right');

        currentVerticalDirection === 'down'
            ? maxBottomCoordinate.includes(currentCoordinateY)
                ? newCoordinatesAndDirections.push('up') : newCoordinatesAndDirections.push('down')
            : maxTopCoordinate.includes(currentCoordinateY)
                ? newCoordinatesAndDirections.push('down') : newCoordinatesAndDirections.push('up');

        newCoordinatesAndDirections.push(universalSpeedRatio);

        return newCoordinatesAndDirections;
    });

    changeGPDOnline({coordinatesAndDirections: newCoordinatesAndDirections});
};