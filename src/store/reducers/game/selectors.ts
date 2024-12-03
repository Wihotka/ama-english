import {StoreInner} from '@store';

export const gameSelectors = {
    gameStatus: (store:StoreInner) => store.game.status,
    gameConfig: (store:StoreInner) => store.game.gameConfig,
    gameSettings: (store:StoreInner) => store.game.gameSettings
};