import React from 'react';

import {config} from './config';

import {Content} from './content';
import {ArenaGameInner} from '@components/common/game/arena';

import init from './init';

import {GameInput} from '@custom-types';

export const LetterChain = ({gameName}:GameInput) =>
    <ArenaGameInner gameName={gameName} config={config} GameContent={Content} {...init}/>;