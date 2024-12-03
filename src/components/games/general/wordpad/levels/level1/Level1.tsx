import React from 'react';

import {Body} from './Body';

import {
    calcProgressPercent,
    startPlaying,
    getFinModalIndicators,
    generateGameData
} from './lw-props';

import {WordpadT1} from './type';

export const Level1 = (p:WordpadT1) => {
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