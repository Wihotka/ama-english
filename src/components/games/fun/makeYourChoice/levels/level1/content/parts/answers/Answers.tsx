import {Btn} from '@components/common/elements';
import {classNames} from 'js-data-utils';
import React from 'react';
import styled from 'styled-components';
import {MakeYourChoice_Answer} from '../../../../../type';
import {CheckAnswerT} from '../../../type';
import styles from './style.scss';

type AnswersP = {
    answers:MakeYourChoice_Answer[];
    btnIndex:number;
    highlight:boolean;
    isCorrectAnswer:boolean;
    checkAnswer:CheckAnswerT;
};

const StyledBtn = styled(Btn)`
    ${({theme}) => ({
        border: '1px solid rgba(188, 79, 18, 0.64);',
        background: `${theme.colors.gradient5}, #fff`,
        boxShadow: '0px 4px 0px #8D1707',
        ':hover': {
            background: `${theme.colors.gradient6}`,
        },
        ':active': {
            background: `${theme.colors.gradient5}, #fff`,
            boxShadow: 'none',
        },
    })};
`;

export const Answers = ({
    answers,
    btnIndex,
    highlight,
    isCorrectAnswer,
    checkAnswer,
}:AnswersP) => {
    const btnClassName = (i:number) => classNames(
        styles.answerBtn,
        highlight && btnIndex === i ? isCorrectAnswer ? styles.correct : styles.wrong : ''
    );

    return (
        <div className={styles.answersContainer}>
            {answers.map(({answer, isCorrect}, i) => (
                <StyledBtn
                    className={btnClassName(i)}
                    key={i}
                    handler={() => checkAnswer(isCorrect, i)}
                >
                    {answer}
                </StyledBtn>
            ))}
        </div>
    );
};
