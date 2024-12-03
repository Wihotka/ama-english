import React from 'react';

import {FieldWrap} from '@components/common/game/components';
import {LocalizedText} from '@components/common';
import {Stages, Comment} from './parts';

import styles from './styles.scss';

import {HomeworkData} from '@components/routes/challenge/types';

type P = {
    homeworkData:HomeworkData['homeworkData'];
};

export const Content = ({homeworkData}:P) => {
    const {progress, task} = homeworkData;
    const {comment} = task;
    const {roundsDone} = progress;

    return (
        <FieldWrap outerClassName={styles.content}>
            <p className={styles.title}>
                <LocalizedText name={'completedRounds'} path={'challenge/translation'}/>: <span className={styles.roundsDone}>{roundsDone}</span>
            </p>
            <Stages  homeworkData={homeworkData}/>
            {comment && <Comment comment={comment}/>}

        </FieldWrap>
    );
};