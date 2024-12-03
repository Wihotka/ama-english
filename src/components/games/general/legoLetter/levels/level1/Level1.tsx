import React from 'react';

import {
    calcProgressPercent,
    startPlaying,
    getFinModalIndicators,
    generateGameData
} from './lw-props';

import {Body} from './Body';

import {LegoLetterL1T} from './type';

export const Level1 = (p:LegoLetterL1T) => {
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
