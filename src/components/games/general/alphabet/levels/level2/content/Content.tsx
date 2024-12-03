import React from 'react';

import {Field} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handleClick, birdsQty} = props;
    const {data} = gameData;
    const {iteration} = gamePlayData;

    const fieldsToShow = data.filter((letter, index) => (index < iteration) && (index >= iteration - birdsQty));

    return (
        <div className={styles.gameWrap}>
            <img
                src={require('/assets/img/sections/general/alphabet/branch.png')}
                alt={''}
                className={styles.image}/>
            <div className={styles.game}>
                {fieldsToShow.map((letter, index) => (
                    <Field
                        key={index}
                        letter={letter}
                        birdsQty={birdsQty}
                        gamePlayData={gamePlayData}
                        handleClick={handleClick}
                        index={index}/>)
                )}
            </div>
        </div>
    );
};
