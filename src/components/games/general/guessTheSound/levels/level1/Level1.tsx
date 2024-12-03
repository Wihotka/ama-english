import React from 'react';

import {Body} from './Body';

import {
    calcProgressPercent,
    startPlaying,
    getFinModalIndicators,
    generateGameData
} from './lw-props';

import {GuessTheSoundL1T} from './type';

export const Level1 = (props:GuessTheSoundL1T) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getFinishModalIndicators={getFinModalIndicators}>
            <Body {...props} />
        </LevelWrapper>
    );
};