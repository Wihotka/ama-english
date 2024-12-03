import React from 'react';

import {Body} from './Body';

import {generateGameData, startPlaying, getFinModalIndicators, calcProgressPercent} from './lw-props';

import {PhraseJumpingT} from './type';

export const Level1 = (props:PhraseJumpingT) => {
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