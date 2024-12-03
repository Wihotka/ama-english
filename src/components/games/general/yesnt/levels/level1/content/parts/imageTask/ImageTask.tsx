import React from 'react';
import {Yesnt_Level2Task} from '../../../../../type';
import {TaskQuestion} from '../taskQuestion';
import {TransitionWrapper} from '../transitionWrapper';
import styles from './style.scss';

type ImageTaskP = {
    taskData:Yesnt_Level2Task[];
    currentQ:number;
};

export const ImageTask = ({taskData, currentQ}:ImageTaskP) => {
    const {img, taskQuestion} = taskData[currentQ];
    const {question} = taskQuestion;

    return (
        <React.Fragment>
            <TransitionWrapper currentQ={currentQ}>
                <div className={styles.imageTaskContainer}>
                    <img
                        src={require(`/assets/img/resources/sentences/yesnt/${img}.png`)}
                        alt=""
                    />
                </div>
            </TransitionWrapper>
            <TransitionWrapper currentQ={currentQ}>
                <TaskQuestion questionText={question} />
            </TransitionWrapper>
        </React.Fragment>
    );
};
