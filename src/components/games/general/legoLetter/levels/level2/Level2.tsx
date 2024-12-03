import React from 'react';

import {
    calcProgressPercent,
    startPlaying,
    getFinModalIndicators,
    generateGameData
} from './lw-props';

import {Body} from './Body';

import {LegoLetterL2T} from './type';

export const Level2 = (p:LegoLetterL2T) => {
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getFinishModalIndicators={getFinModalIndicators}>
            <Body {...p}/>
        </LevelWrapper>
    );
};
