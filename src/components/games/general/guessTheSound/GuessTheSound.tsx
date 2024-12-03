import React from 'react';
import {GameInner} from '@components/common/game';

import {config} from '@components/games/general/guessTheSound/config';
import {levels} from '@components/games/general/guessTheSound/levels';

import {GameInput} from '@custom-types';

export const GuessTheSound = (p:GameInput) => <GameInner gameLevels={levels} config={config} {...p}/>;
