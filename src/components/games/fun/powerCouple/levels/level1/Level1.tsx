import React from 'react';

import {Body} from './Body';

import {startPlaying,generateGameData,calcProgressPercent} from './lw-props';

import {PowerCoupleT} from './type';

export const Level1 = (props:PowerCoupleT) => {
    const {LevelWrapper} = props;

    return (
        <LevelWrapper
            startPlaying={startPlaying}
            calcProgressPercent={calcProgressPercent}
            generateGameData={generateGameData}
        >
            <Body {...props}/>
        </LevelWrapper>
    );
};