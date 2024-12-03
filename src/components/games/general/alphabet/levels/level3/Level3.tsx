import React from 'react';

import {
    calcProgressPercent,
    startPlaying,
    getStarsRequirements,
    getFinModalIndicators,
    generateGameData
} from './lw-props';

import {Body} from './Body';

import {AlphabetL3T} from './type';

export const Level3 = (p:AlphabetL3T) => {
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
