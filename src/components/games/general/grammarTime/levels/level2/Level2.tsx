import React from 'react';
import {GrammarTimeL2T} from './type';
import {Body} from './Body';
import {
    calcProgressPercent,
    getFinModalIndicators,
    startPlaying,
} from './lw-props';
import {generateGameData} from '../../lw-props';

export const Level2 = (p:GrammarTimeL2T) => {
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}
            getFinishModalIndicators={getFinModalIndicators}
        >
            <Body {...p} />
        </LevelWrapper>
    );
};
