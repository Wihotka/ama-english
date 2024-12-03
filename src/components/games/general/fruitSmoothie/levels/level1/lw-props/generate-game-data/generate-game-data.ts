import {generateVariants} from './generate-variants';

import {GenerateGDCB} from '@custom-types';
import {FruitSmoothieL1T, FruitsSmoothie_GameData} from '../../type';

export const generateGameData:GenerateGDCB<FruitSmoothieL1T> = async ({
    gameSettings,
    gameConfig
}):Promise<FruitsSmoothie_GameData> => {
    const {theme, answersQty, complexity, level, speedInSeconds} = gameSettings;
    const {flyDelay, rangeCoordinatesCentralPoint, finalHeightPosition} = gameConfig;

    const variantArray = await generateVariants({
        theme,
        answersQty,
        complexity,
        level,
        flyDelay,
        rangeCoordinatesCentralPoint,
        finalHeightPosition
    });

    return {
        variantArray,
        timeFly: +speedInSeconds,
        maxAttemptsQty: level === 1 ? 1 : 2 /*Максимальное количество попыток в зависимости от уровня*/
    };

};