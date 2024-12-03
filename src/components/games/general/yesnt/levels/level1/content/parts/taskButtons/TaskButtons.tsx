import React from 'react';
import {GameBtn} from '@components/common/game/components';
import {classNames} from 'js-data-utils';
import styled from 'styled-components';

import {ChangeUserAnswerT} from '../../../type';

import styles from './style.scss';

type TaskButtonsP = {
    highlight:'true' | 'false' | null;
    isCorrect:boolean;
    chosenBtn:'true' | 'false' | null;
    isTaskBtnDisabled:boolean;
    changeUserAnswer:ChangeUserAnswerT;
};

const TaskBtn = styled(GameBtn)<{ isChosen:boolean }>`
    @media (max-width: 732px) and (orientation: landscape) {
        box-shadow: ${({theme, isChosen}) => isChosen ? 'none' : `0 4px 0 ${theme.colors.color1}`};
        transform: ${({isChosen}) => isChosen ? 'translateY(4px)' : ''};
        
        &:active {
            transform: translateY(4px);
        }
    }

    @media (max-width: 412px) and (orientation: portrait) {
        box-shadow: ${({theme, isChosen}) => isChosen ? 'none' : `0 4px 0 ${theme.colors.color1}`};
        transform: ${({isChosen}) => isChosen ? 'translateY(4px)' : ''};
        
        &:active {
            transform: translateY(4px);
        }
    }

    ${({isChosen}) => isChosen ? {
        transform: 'translateY(8px)',
        boxShadow: 'none'
    } : {}}
`;

export const TaskButtons = ({
    highlight,
    isCorrect,
    chosenBtn,
    isTaskBtnDisabled,
    changeUserAnswer,
}:TaskButtonsP) => {
    const btnClassName = (v:'true' | 'false' | null) =>
        classNames(
            styles.taskButton,
            highlight === v ? (isCorrect ? styles.correct : styles.wrong) : ''
        );
    const btnStyle:React.CSSProperties = isTaskBtnDisabled
        ? {pointerEvents: 'none'}
        : {};

    return (
        <div className={styles.taskButtonsContainer}>
            <TaskBtn
                className={btnClassName('true')}
                onClick={() => changeUserAnswer(true)}
                isChosen={chosenBtn === 'true'}
                style={btnStyle}
            >
                True
            </TaskBtn>
            <TaskBtn
                className={btnClassName('false')}
                onClick={() => changeUserAnswer(false)}
                isChosen={chosenBtn === 'false'}
                style={btnStyle}
            >
                False
            </TaskBtn>
        </div>
    );
};
