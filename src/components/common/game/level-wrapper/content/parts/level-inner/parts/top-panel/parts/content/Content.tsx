import React, {useContext} from 'react';

import {Block} from '../block';

import {LevelWrapperPropsContext} from '@components/common/game/game-inner/content/parts/level-resolver/LevelResolver';
import {LevelWrapperT} from '@components/common/game/level-wrapper/type';

type P = Required<Pick<LevelWrapperT, 'getTopPanelContent'>>;

export const Content = ({getTopPanelContent}:P) => {
    const {game} = useContext(LevelWrapperPropsContext);
    const {gamePlayData, gameData} = game;

    const content = getTopPanelContent({gamePlayData, gameData});

    if (content === null) return null;

    return (
        <Block type={'content'}>
            {content}
        </Block>
    );
};
