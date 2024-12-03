import React from 'react';
import {classNames} from 'js-data-utils';
import styled from 'styled-components';

import {QuestionFieldP, TypeLetter} from './../../../type';

import styles from './styles.scss';

const Word = styled.span`
  color: #7141B7;
`;

const Underline = styled.span`
  border-bottom: 2px solid #7141B7;
`;

export const QuestionField:React.FC<QuestionFieldP> = (props) => {
    const {question, selectOption, isFieldUpdate} = props;

    const styleUpdateField = !isFieldUpdate && styles.view;
    const styleIsSuccessField = selectOption?.isCorrect && styles.successField;
    const stylesField = classNames(styles.question, styleUpdateField, styleIsSuccessField);

    const questionArray = (!!selectOption.option && selectOption.isCorrect)
        ? question.split(' ')
            .map(letter => letter === TypeLetter.question 
                ? selectOption.option ? selectOption.option.content : letter
                : letter)
        : question.split(' ');

    const indexAnswer = selectOption.isCorrect ? null : questionArray.indexOf(TypeLetter.question);

    const wordCn = (i:number) => classNames(styles.word, i === 0 ? styles.cap : '');

    return (
        <div className={stylesField}>
            {questionArray.map((word, index) => {
                if (index === indexAnswer) {
                    return <Underline className={styles.underlining} key={index}/>;
                }

                if (word === '.' || word === '?' || word === ',') {
                    return <Word className={styles.mark} key={index}>{word}</Word>;
                }

                return <Word className={wordCn(index)} key={index}>{word}</Word>;
            }
            )}
        </div>
    );
};