import React from 'react';

import {Body} from './Body';

import {calcProgressPercent, startPlaying, getFinModalIndicators, generateGameData, getStarsRequirements} from './lw-props';

import {NavigationT} from './type';

export const Level = (p:NavigationT) => {
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