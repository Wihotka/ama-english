import React from 'react';

import {GameStart, GameFinish} from './resolvers';

import {DefaultGame} from '@custom-types';
import {LevelWrapperT} from '@components/common/game/level-wrapper/type';

type P = Pick<LevelWrapperT, 'getStarsRequirements' | 'getFinishModalIndicators'> & {
    game:DefaultGame;
    progressPercent:number;
};

export const Modal = (p:P) => {
    const {game, progressPercent, getFinishModalIndicators, getStarsRequirements} = p;
    const {status, gameTime, gameSettings, gameConfig, gamePlayData, gameData} = game;
    const {isPlaying, isFinishPlaying} = status;
    const isShowStart = !isPlaying && !isFinishPlaying;

    const getIndicators = () => {
        if (typeof getFinishModalIndicators === 'function') {
            return getFinishModalIndicators({gamePlayData, gameData, gameConfig, gameSettings});
        }

        return {};
    };

    return isShowStart
        ? <GameStart
            gameParams={{gameSettings, gameConfig}}
            getStarsRequirements={getStarsRequirements}/>
        : <GameFinish
            progressPercent={progressPercent}
            gameTime={gameTime}
            gameParams={{gameSettings, gameConfig}}
            getIndicators={getIndicators}/>;
};
