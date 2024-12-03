import React from 'react';

import {startPlaying, calcProgressPercent, generateGameData, getStarsRequirements} from './lw-props';

import {Body} from './Body';
import {LostTwinsT} from './type';

export const Level = (props:LostTwinsT) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            calcProgressPercent={calcProgressPercent}
            generateGameData={generateGameData}

            getStarsRequirements={getStarsRequirements}>

            <Body {...props}/>

        </LevelWrapper>
    );
};
