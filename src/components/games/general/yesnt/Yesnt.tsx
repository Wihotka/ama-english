import {GameInner} from '@components/common/game';
import {GameInput} from '@custom-types';
import React from 'react';
import {config} from './config';
import {levels} from './levels';

export const Yesnt = (p:GameInput) => <GameInner config={config} gameLevels={levels} {...p} />;

