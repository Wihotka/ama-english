import React from 'react';

import {Body} from './Body';

import {generateGameData, startPlaying, getFinModalIndicators, calcProgressPercent} from './lw-props';

import {GrammarMixT2} from './type';

export const Level2 = (props:GrammarMixT2) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}

            getFinishModalIndicators={getFinModalIndicators}
        >
            <Body {...props} />
        </LevelWrapper>
    );
};