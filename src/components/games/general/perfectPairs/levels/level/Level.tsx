import React from 'react';

import {Body} from './Body';

import {
    startPlaying,
    calcProgressPercent,
    generateGameData,
    getFinModalIndicators,
    getStarsRequirements
} from './lw-props';

import {PerfectPairsT} from './type';

export const Level = (props:PerfectPairsT) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            calcProgressPercent={calcProgressPercent}
            generateGameData={generateGameData}

            getStarsRequirements={getStarsRequirements}
            getFinishModalIndicators={getFinModalIndicators}>
            <Body {...props}/>
        </LevelWrapper>
    );
};