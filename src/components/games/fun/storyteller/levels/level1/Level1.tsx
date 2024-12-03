import React from 'react';
import {StorytellerT} from '../../type';
import {Body} from './Body';
import {
    calcProgressPercent,
    generateGameData,
    startPlaying,
} from './lw-props';

export const Level1 = (p:StorytellerT) => {
    const {LevelWrapper} = p;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            generateGameData={generateGameData}
            calcProgressPercent={calcProgressPercent}
        >
            <Body {...p} />
        </LevelWrapper>
    );
};
