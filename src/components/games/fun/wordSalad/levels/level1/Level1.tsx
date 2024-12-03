import React from 'react';

import {
    calcProgressPercent,
    startPlaying,
    getTopPanelContent,
    getFinModalIndicators,
    generateGameData
} from '../../lw-props';

import {Body} from './Body';

import {WordSaladT} from '../../type';

export const Level1 = (p:WordSaladT) => {
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getTopPanelContent={getTopPanelContent}
            getFinishModalIndicators={getFinModalIndicators}>
            <Body {...p}/>
        </LevelWrapper>
    );
};
