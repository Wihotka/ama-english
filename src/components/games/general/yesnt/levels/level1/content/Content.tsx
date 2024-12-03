import {Btn} from '@components/common/elements';
import React from 'react';
import {Yesnt_GameData, Yesnt_GamePlayData} from '../../../type';
import {ChangeUserAnswerT} from '../type';
import {isLevel1Task} from '../utils';
import {TaskButtons, ImageTask, TextTask} from './parts';
import styles from './style.scss';

type ContentP = {
    gameData:Yesnt_GameData;
    gamePlayData:Yesnt_GamePlayData;
    course:number;
    changeUserAnswer:ChangeUserAnswerT;
    checkAnswer:() => void;
};

export const Content = ({
    gameData,
    gamePlayData,
    changeUserAnswer,
    checkAnswer,
}:ContentP) => {
    const {taskData} = gameData;
    const {
        currentQ,
        isCheckBtnDisabled,
        highlight,
        isCorrect,
        chosenBtn,
        isTaskBtnDisabled,
    } = gamePlayData;

    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentMain}>
                {isLevel1Task(taskData) ? (
                    <TextTask taskData={taskData} currentQ={currentQ} />
                ) : (
                    <ImageTask
                        currentQ={currentQ}
                        taskData={taskData}
                    />
                )}
                <TaskButtons
                    highlight={highlight}
                    isCorrect={isCorrect}
                    chosenBtn={chosenBtn}
                    isTaskBtnDisabled={isTaskBtnDisabled}
                    changeUserAnswer={changeUserAnswer}
                />
            </div>
            <div className={styles.checkBtnContainer}>
                <Btn
                    className={styles.checkBtn}
                    disabled={isCheckBtnDisabled}
                    handler={checkAnswer}
                    textCode="check"
                    type="primary"
                />
            </div>
        </div>
    );
};
