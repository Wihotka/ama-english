import {ArenaModes, ArenaPlayersInfo} from '@custom-types';

type P = {
    mode:ArenaModes;
    stepTime?:number;
    players:ArenaPlayersInfo;
    timer?:number;
};

export const generateIGPD = (props:P) => {
    const {stepTime, players, timer} = props;

    return {
        score: {
            [`${players.player1?.name}`]: 0,
            [`${players.player2?.name}`]: 0,
        },
        // timer: mode === ArenaModes.online ? 0 : stepTime,
        timer: timer,
        stepTime: stepTime,
        stepBy: players.player1?.name
    };
};