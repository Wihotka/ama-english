import React from 'react';
import {MakeYourChoiceT} from '../../type';
import {Body} from './Body';
import {
    calcProgressPercent,
    generateGameData,
    startPlaying,
    getFinModalIndicators
} from './lw-props';

export const Level1 = (p:MakeYourChoiceT) => {
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
