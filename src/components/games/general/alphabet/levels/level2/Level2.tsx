import React from 'react';

import {
    calcProgressPercent,
    startPlaying,
    getStarsRequirements,
    getFinModalIndicators,
    generateGameData
} from './lw-props';

import {Body} from './Body';

import {AlphabetL2T} from './type';

export const Level2 = (p:AlphabetL2T) => {
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getStarsRequirements={getStarsRequirements}
            getFinishModalIndicators={getFinModalIndicators}>
            <Body {...p}/>
        </LevelWrapper>
    );
};
