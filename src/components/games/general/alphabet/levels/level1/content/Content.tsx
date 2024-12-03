import React from 'react';
import styled from 'styled-components';

import {Letter} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

const CurrentLetter = styled.div`
    ${({theme}) => ({
        background: theme.colors.color6,
        borderColor: theme.colors.color5
    })}
`;

export const Content = (props:ContentP) => {
    const {gamePlayData, gameData, handleClick} = props;
    const {data} = gameData;
    const {alphabet} = gameData;
    const {currentIndex} = gamePlayData;

    return (
        <div className={styles.gameWrap}>
            <CurrentLetter className={styles.currentLetter}>
                {alphabet[currentIndex]}
            </CurrentLetter>
            <div className={styles.game}>
                {data.map(letterData => (
                    <Letter
                        key={letterData.index}
                        handleClick={handleClick}
                        letterData={letterData}
                        gamePlayData={gamePlayData}/>
                ))}
            </div>
        </div>
    );
};
