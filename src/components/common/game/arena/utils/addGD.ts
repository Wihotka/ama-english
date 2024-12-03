import {addGameData} from '@reducers/game/dispatchers';
import {ArenaPlayersInfo} from '@custom-types';

export type P = {
    players:ArenaPlayersInfo,
    game:any
};

export const addGD = (props:P) => {
    const {players, game} = props;

    addGameData({
        players,
        game: game
    });
};