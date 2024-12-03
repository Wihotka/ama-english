import React from 'react';

import {Body} from './Body';
import {generateGameData, startPlaying, calcProgressPercent, getFinModalIndicators, getStarsRequirements} from './lw-props';

import {TimelineL1T} from './type';

export const Level1 = (props:TimelineL1T) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getStarsRequirements={getStarsRequirements}
            getFinishModalIndicators={getFinModalIndicators}>
            <Body {...props} />
        </LevelWrapper>
    );

};