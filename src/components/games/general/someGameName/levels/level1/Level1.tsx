import React from 'react';

import {
    calcProgressPercent,
    startPlaying,
    generateGameData,
    getTopPanelContent,
    getStarsRequirements,
    getFinModalIndicators
} from '../../lw-props';

import {Body} from './Body';

import {SomeGameNameT} from '../../type';

export const Level1 = (p:SomeGameNameT) => {
    console.log('Body', p);
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getTopPanelContent={getTopPanelContent}
            getStarsRequirements={getStarsRequirements}
            getFinishModalIndicators={getFinModalIndicators}>
            <Body {...p}/>
        </LevelWrapper>
    );
};