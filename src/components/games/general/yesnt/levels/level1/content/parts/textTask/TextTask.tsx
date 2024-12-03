import React from 'react';
import {LocalizedText} from '@components/common';
import styled from 'styled-components';

import {TaskQuestion} from '../taskQuestion';
import {TransitionWrapper} from '../transitionWrapper';

import {Yesnt_Level1Task} from '../../../../../type';

import styles from './style.scss';

type TextTaskP = {
    taskData:Yesnt_Level1Task;
    currentQ:number;
};

const TextScrollContainer = styled.div`
    scrollbar-color: ${({theme}) => `${theme.colors.color5} #FFFFFF`};

    &::-webkit-scrollbar {
        background: ${({theme}) => theme.colors.color5 + 40 };
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.color5};
    }
`;

export const TextTask = ({taskData, currentQ}:TextTaskP) => {
    const {taskText, textTitle, taskQuestions} = taskData;
    const {question} = taskQuestions[currentQ];

    return (
        <>
            <div className={styles.textTaskContainer}>
                <p className={styles.taskTextHeader}>
                    <LocalizedText 
                        name='readText'
                        path="games/general/yesnt/static/translation"
                    />:
                </p>
                <TextScrollContainer className={styles.textScrollContainer}>
                    <p className={styles.taskTextTitle}>
                        {textTitle}
                    </p>
                    <p className={styles.taskText}>{taskText}</p>
                </TextScrollContainer>
            </div>
            <TransitionWrapper currentQ={currentQ}>
                <TaskQuestion questionText={question} />
            </TransitionWrapper>
        </>
    );
};
