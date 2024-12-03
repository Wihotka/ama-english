import React from 'react';

import {Input, Letters, Result} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gamePlayData, imagesPaths, handleInput, handleClear, handleEnter, handleRenew} = props;
    const {selectedWords} = gamePlayData;

    return (
        <div className={styles.gameWrap}>
            <div className={styles.game}>
                <Input
                    imagesPaths={imagesPaths}
                    gamePlayData={gamePlayData}
                    handleClear={handleClear}
                    handleRenew={handleRenew}/>
                <Letters
                    gamePlayData={gamePlayData} 
                    handleEnter={handleEnter} 
                    handleInput={handleInput}/>
                <Result selectedWords={selectedWords}/>
            </div>
        </div>
    );
};
