import React from 'react';
import {SortOutT} from '../../type';
import {Body} from './Body';
import {
    calcProgressPercent,
    generateGameData,
    startPlaying,
    getFinModalIndicators,
    getStarsRequirements
} from './lw-props';

export const Level1 = (p:SortOutT) => {
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}
            getFinishModalIndicators={getFinModalIndicators}
            getStarsRequirements={getStarsRequirements}
        >
            <Body {...p} />
        </LevelWrapper>
    );
};
