import React from 'react';
import {GrammarTimeL1T} from './type';
import {Body} from './Body';
import {
    calcProgressPercent,
    startPlaying,
    getStarsRequirements,
    getFinModalIndicators,
} from './lw-props';
import {generateGameData} from '../../lw-props';

export const Level1 = (p:GrammarTimeL1T) => {
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
