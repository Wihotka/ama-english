import {SideFlight, updateStartCoordinatesT} from '../type';

export const transformCoordinates:updateStartCoordinatesT = (params) => {
    const {option, fieldSize, optionsFieldSize} = params;
    const {heightField, widthField} = fieldSize;
    const {id, coordinatesCentralPoint, endPositionFly} = option;

    if (optionsFieldSize.length === 0) {
        return {
            coordinatesCentralPoint: {X: 0, Y: 0},
            endPositionFly: {X: 0, Y: 0},
            startPositionFly: {X: -500, Y: 0}
        };
    }

    const {heightField: optionHeight, widthField: optionWidth} = optionsFieldSize[id];

    if (option.startSide === SideFlight.left) {
        return {
            startPositionFly: {
                X: -(optionWidth + 20),
                Y: -optionHeight
            },
            coordinatesCentralPoint: {
                X: Math.floor((widthField / 100) * coordinatesCentralPoint.X) + (optionWidth * 2),
                Y: Math.floor((heightField / 100) * coordinatesCentralPoint.Y) + optionHeight
            },
            endPositionFly: {
                X: widthField + (optionWidth * 3),
                Y: Math.floor((heightField / 100) * endPositionFly.Y) + (optionHeight * 2)
            }
        };
    }

    return {
        startPositionFly: {
            X: widthField,
            Y: -optionHeight
        },
        coordinatesCentralPoint: {
            X: Math.floor((widthField / 100) * coordinatesCentralPoint.X) + optionWidth,
            Y: Math.floor((heightField / 100) * coordinatesCentralPoint.Y) + optionHeight
        },
        endPositionFly: {
            X: -(optionWidth * 3),
            Y: Math.floor((heightField / 100) * endPositionFly.Y) + optionHeight
        }
    };
};