import React from 'react';

import {Interactive} from './parts/interactive';
import {Feathers} from './parts/feathers';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handleFeatherCB, handlePlayCB, field, feather, level} = props;

    return (
        <div className={styles.gameWrap}>
            <div className={styles.game}>
                <Interactive
                    gameData={gameData}
                    gamePlayData={gamePlayData}

                    handlePlayCB={handlePlayCB}

                    level={level}/>
                <Feathers
                    gameData={gameData}
                    gamePlayData={gamePlayData}

                    handleFeatherCB={handleFeatherCB}

                    field={field}
                    feather={feather}
                    level={level}/>
            </div>
        </div>
    );
};