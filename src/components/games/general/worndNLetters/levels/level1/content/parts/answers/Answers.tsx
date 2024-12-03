import React from 'react';

import {Cell} from '../cell';

import styles from './style.scss';

import {CardT, WorndNLetters_GamePlayData} from '../../../type';

type AnswersT = {
    answers:Array<CardT>,
    moveHandler:Function,
    gamePlayData:WorndNLetters_GamePlayData,
    changeDragStatus:Function
};

export const Answers = ({answers, moveHandler, gamePlayData, changeDragStatus}:AnswersT) =>
    <div className={styles.answers}>
        {answers.map((answer, index) =>
            <div key={index} className={styles.answer}>
                <div className={styles.answer__index}>
                    {index + 1}
                </div>
                <Cell
                    card={answer}
                    gamePlayData={gamePlayData}
                    moveHandler={moveHandler}
                    changeDragStatus={changeDragStatus}
                />
            </div>
        )}
    </div>;