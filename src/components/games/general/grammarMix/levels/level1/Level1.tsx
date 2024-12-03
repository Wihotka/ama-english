import React from 'react';

import {Body} from './Body';

import {generateGameData, startPlaying, getFinModalIndicators, getStarsRequirements, calcProgressPercent} from './lw-props';

import {GrammarMixT1} from './type';

export const Level1 = (props:GrammarMixT1) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}

            calcProgressPercent={calcProgressPercent}

            getFinishModalIndicators={getFinModalIndicators}
            getStarsRequirements={getStarsRequirements}
        >
            <Body {...props} />
        </LevelWrapper>
    );
};