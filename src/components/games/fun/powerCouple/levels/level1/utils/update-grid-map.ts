import {isEqual} from 'lodash';
import {getCoordinatesCards} from './';

import {UpdateGridMapT} from './../type';

export const updateGridMap:UpdateGridMapT = (params) => {
    const {gridSelectMap, selectCards, mainField} = params;
    const coordinateCorrectCard = getCoordinatesCards({mainField, selectCards});

    return gridSelectMap.map((gridField, numberGridField) => gridField
        .map((line, numberGirdLine) =>
            line.filter((card, indexCard) =>
                !coordinateCorrectCard.some(coordinate =>
                    isEqual(coordinate, [numberGridField, numberGirdLine, line[indexCard]])))));
};