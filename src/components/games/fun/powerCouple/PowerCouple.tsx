import React from 'react';

import {GameInner} from '@components/common/game';

import {levels} from './levels';
import {config} from './config';

import {GameInput} from '@custom-types';

export const PowerCouple = (p:GameInput) => <GameInner gameLevels={levels} config={config} {...p}/>;