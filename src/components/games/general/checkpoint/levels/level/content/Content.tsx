import React from 'react';

import {Btn} from '@components/common/elements';
import {Cards, Modal} from './parts';

import styles from './style.scss';

import {ContentP} from '../type';

export const Content = (props:ContentP) => {
    const {gameData, gamePlayData, handleCardCB, handlePlayCB, handleInputCB, compareValuesCB, course} = props;
    const {options} = gameData;
    const {
        inputValue,
        answerStatus,
        isModalShowed,
        mistakeCardIndex,
        errorCardIndexes,
        hiddenCardIndexes,
        currentOptionIndex,
        isPlayButtonPressed
    } = gamePlayData;

    return (
        <div className={styles.gameWrap}>
            <Cards
                options={options}
                handleCardCB={handleCardCB}
                isModalShowed={isModalShowed}
                mistakeCardIndex={mistakeCardIndex}
                errorCardIndexes={errorCardIndexes}
                hiddenCardIndexes={hiddenCardIndexes}
                course={course}/>
            <Modal
                options={options}
                inputValue={inputValue}
                answerStatus={answerStatus}
                handlePlayCB={handlePlayCB}
                handleInputCB={handleInputCB}
                isModalShowed={isModalShowed}
                compareValuesCB={compareValuesCB}
                currentOptionIndex={currentOptionIndex}
                isPlayButtonPressed={isPlayButtonPressed}/>
            {isModalShowed &&
                <Btn
                    value={'Enter'}
                    type={'primary'}
                    textCode={'check'}
                    className={styles.checkBtn}
                    handler={() => compareValuesCB()}
                    disabled={inputValue.length === 0 || answerStatus !== ''}/>}
        </div>
    );
};
