import React from 'react';
import {LocalizedText} from '@components/common';

import styles from './style.scss';

type TaskQuestionP = {
    questionText:string;
};

export const TaskQuestion = ({questionText}:TaskQuestionP) => (
    <div className={styles.taskQuestionContainer}>
        <p className={styles.taskTextHeader}>
            <LocalizedText
                name='proposition'
                path="games/general/yesnt/static/translation"
            />
        </p>
        <p className={styles.taskQuestionText}>{questionText}</p>
    </div>
);
