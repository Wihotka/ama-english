import React from 'react';

import {GameInner} from '@components/common/game';
import {GameInput} from '@custom-types';

import {config} from './config';
import {levels} from './levels';

export const SomeGameName = (p:GameInput) => <GameInner {...p} config={config} gameLevels={levels}/>;
