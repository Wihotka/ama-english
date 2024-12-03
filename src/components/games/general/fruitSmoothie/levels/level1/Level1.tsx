import React from 'react';

import {Body} from './Body';
import {
    calcProgressPercent,
    generateGameData,
    startPlaying,
    getFinModalIndicators,
    getStarsRequirements
} from './lw-props';

import {FruitSmoothieT} from './type';

export const Level1 = (props:FruitSmoothieT) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getStarsRequirements={getStarsRequirements}
            getFinishModalIndicators={getFinModalIndicators}
        >
            <Body {...props} />
        </LevelWrapper>
    );
};