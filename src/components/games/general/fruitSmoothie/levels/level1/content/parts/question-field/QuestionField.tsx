import React from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import {QuestionFieldP, TypeTextInQuestion} from '../../../type';

import styles from './styles.scss';

const Word = styled.span`
  color: #7141B7;
`;

const Underline = styled.span`
  border-bottom: 2px solid #7141B7;
`;

export const QuestionField = (props:QuestionFieldP) => {
    const {question, selectOptions, isFieldUpdate} = props;

    const questionArray = (!!selectOptions && selectOptions.isCorrect)
        ? question.split(' ')
            .map(letter => letter === TypeTextInQuestion.answer
                ? selectOptions.isCorrect ? selectOptions.text : letter
                : letter)
        : question.split(' ');

    const indexAnswer = selectOptions?.isCorrect ? null : questionArray.indexOf(TypeTextInQuestion.answer);

    const styleUpdateField = !isFieldUpdate && styles.view;

    const styleIsSuccessField = selectOptions?.isCorrect && styles.successField;

    const styleField = classNames(styles.field, styleUpdateField, styleIsSuccessField);

    return (
        <div className={styleField}>
            <p className={styles.question}>
                {questionArray.map((word, index) => {
                    if (index === indexAnswer) {
                        return <Underline className={styles.underlining} key={index}/>;
                    }

                    if (word === '.' || word === '?' || word === ',') {
                        return <Word className={styles.mark} key={index}>{word}</Word>;
                    }

                    return <Word className={styles.word} key={index}>{word}</Word>;
                }
                )}
            </p>
        </div>
    );
};
