//дані міняються не через сокети
import {changeGamePlayData} from '@reducers/game/dispatchers';

export const changeGPDOnline = <T>(gamePlayData:Partial<T>) =>
    changeGamePlayData(gamePlayData);

export const changeGPD = <T>(gamePlayData:Partial<T>) =>
    changeGamePlayData(gamePlayData);
