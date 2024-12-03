import {pathConfig} from '@global-config/path-config';
import {store} from '@store';

import {LoadLocalGameData} from './types';

/**
 * Функция принимает путь файла, который будет грузить
 * все файлы с данными должны хранится по пути:
 * /assets/resources/.../[resourceName]/data.json
 *
 * В зависомости от типа игры (зависима/независима от этапа обучения)
 * добавляется/не добавляется прослойка с папкой этапа обучения
 */

export const loadLocalGameData:LoadLocalGameData = async (resourceName) => {
    // @ts-ignore
    const {course} = store.getState().game.gameSettings;

    const path = course
        ? `${pathConfig.base}/assets/resources/games/dependent/${course}/${resourceName}/data.json`
        : `${pathConfig.base}/assets/resources/games/independent/${resourceName}/data.json`;

    return fetch(path).then(data => data.json());
};