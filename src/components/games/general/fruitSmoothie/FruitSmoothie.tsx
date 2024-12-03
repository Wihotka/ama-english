import React from 'react';

import {GameInner} from '@components/common/game';

import {config} from './config';
import {levels} from './levels';

import {GameInput} from '@custom-types';

export const FruitSmoothie = (p:GameInput) => <GameInner gameLevels={levels} config={config} {...p}/>;