import React from 'react';
import {YesntT} from '../../type';
import {Body} from './Body';
import {
    calcProgressPercent,
    generateGameData,
    startPlaying,
    getFinModalIndicators,
    getStarsRequirements
} from './lw-props';

export const Level1 = (p:YesntT) => {
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
