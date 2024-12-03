import React from 'react';

import {Info} from './parts/info';
import {Puzzles} from './parts/puzzles';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = ({gamePlayData, gameData, handleHint, handlePuzzle, handleVoice}:ContentP) =>
    (
        <div className={styles.gameWrap}>
            <div className={styles.game}>
                <Info
                    gamePlayData={gamePlayData}
                    gameData={gameData}

                    handleHint={handleHint}
                    handleVoice={handleVoice}/>
                <Puzzles
                    gamePlayData={gamePlayData}
                    handlePuzzle={handlePuzzle}/>
            </div>
        </div>
    );