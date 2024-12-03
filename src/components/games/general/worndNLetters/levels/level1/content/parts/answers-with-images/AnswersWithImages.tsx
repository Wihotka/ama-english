import React from 'react';

import {Cell} from '../cell';

import styles from './style.scss';

import {CardT, WorndNLetters_GameData, WorndNLetters_GamePlayData} from '../../../type';

type AnswersT = {
    words:WorndNLetters_GameData['examples'][number]['words'],
    answers:Array<CardT>,
    moveHandler:Function,
    gamePlayData:WorndNLetters_GamePlayData,
    changeDragStatus:Function
};

export const AnswersWithImages = ({words, answers, moveHandler, gamePlayData, changeDragStatus}:AnswersT) =>
    <div className={styles.answers}>
        {words.map(({image}, index) =>
            <div className={styles.answer} key={index}>
                <div className={styles.imageField}>
                    <img src={image} alt={''} className={styles.image}/>
                </div>
                <Cell
                    card={answers[index]}
                    gamePlayData={gamePlayData}
                    moveHandler={moveHandler}
                    changeDragStatus={changeDragStatus}
                />
            </div>)}
    </div>;
