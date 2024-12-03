import React from 'react';

import {Body} from './Body';

import {
    startPlaying,
    calcProgressPercent,
    generateGameData,
    getFinModalIndicators,
    getStarsRequirements
} from './lw-props';

import {ItsMatchT} from './type';

export const Level = (props:ItsMatchT) => {
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