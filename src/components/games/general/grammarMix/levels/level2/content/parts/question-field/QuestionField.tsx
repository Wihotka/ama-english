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
    const {question, correctAnswer, indexVariantsAnswer, isCorrectAnswer, isFieldUpdate} = props;

    const questionArray = isCorrectAnswer
        ? question
            .filter((letter, index) => indexVariantsAnswer !== index)
            .map(letter => letter === TypeLetter.question ? correctAnswer : letter)
        : question;

    const indexAnswer = isCorrectAnswer ? null : questionArray.indexOf(TypeLetter.question);

    const styleUpdateField = !isFieldUpdate && styles.view;
    const styleIsSuccessField = isCorrectAnswer && styles.successField;

    const stylesField = classNames(styles.question, styleUpdateField, styleIsSuccessField);

    const wordCn = (i:number) => classNames(styles.word, i === 0 ? styles.cap : '');

    return (
        <div className={stylesField}>
            {questionArray.map((word, index) => {

                if (index === indexAnswer) {
                    return <Underline className={styles.underlining} key={index}/>;
                }

                if (!isCorrectAnswer && indexVariantsAnswer === index) {
                    return <Word className={styles.variantsAnswer} key={index}>{word}</Word>;
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