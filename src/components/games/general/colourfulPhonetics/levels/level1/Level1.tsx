import React from 'react';
import {ColourfulPhoneticsT} from '../../type';
import {Body} from './Body';
import {
    calcProgressPercent,
    generateGameData,
    startPlaying,
    getStarsRequirements,
    getFinModalIndicators
} from './lw-props';

export const Level1 = (p:ColourfulPhoneticsT) => {
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}
            getStarsRequirements={getStarsRequirements}
            getFinishModalIndicators={getFinModalIndicators}
        >
            <Body {...p} />
        </LevelWrapper>
    );
};