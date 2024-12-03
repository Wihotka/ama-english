import {classNames} from 'js-data-utils';
import React from 'react';
import {SortOut_GameTask, SortOut_Preposition} from '../../../../../type';
import styles from './style.scss';
import {TaskImage} from './taskImage';

type GameTaskP = {
    task:SortOut_GameTask;
    isCorrect:boolean;
    highlight:boolean;
};

const prepositionResolver:{ [k in SortOut_Preposition]:string } = {
    left: 'on the left of',
    right: 'on the right of',
    above: 'above',
    under: 'under',
    between: 'between',
};

export const GameTask = ({task, isCorrect, highlight}:GameTaskP) => {
    const {answerElement, targetElement, preposition, extraElementImage}
        = task;
    const {image: answerImage} = answerElement;
    const {image: targetImage} = targetElement;

    return (
        <div
            className={classNames(
                styles.gameTaskContainer,
                highlight && !isCorrect ? styles.highlight : ''
            )}
        >
            <p className={styles.gameTaskText}>
                <TaskImage image={answerImage} />
                {prepositionResolver[preposition]}
                {extraElementImage ? (
                    <>
                        <TaskImage image={targetImage}/>
                        and
                        <TaskImage image={extraElementImage}/>
                    </>
                ) : (
                    <TaskImage image={targetImage} />
                )}
            </p>
        </div>
    );
};
