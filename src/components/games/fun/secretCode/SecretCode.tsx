import {GameInner} from '@components/common/game';
import {GameInput} from '@custom-types/game';
import React from 'react';
import {config} from './config';
import {levels} from './levels';

export const SecretCode = (p:GameInput) => (
    <GameInner {...p} config={config} gameLevels={levels} />
);
